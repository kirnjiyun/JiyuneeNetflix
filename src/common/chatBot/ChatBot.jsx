import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
    ChatBotContainer,
    ChatIcon,
    ChatWindow,
    ChatHeader,
    ChatTitle,
    CloseButton,
    ChatBody,
    MovieTitle,
    ChatFooter,
    ChatInput,
    SendButton,
    PlaceholderText,
} from "./chatBot.styled";

const ChatBot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [input, setInput] = useState("");
    const [chatHistory, setChatHistory] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        console.log("chatHistory 상태:", chatHistory);
    }, [chatHistory]);

    const fetchRecommendations = async () => {
        if (!input.trim()) return;

        setIsLoading(true);
        try {
            const response = await axios.post(
                "http://localhost:4040/recommend",
                { message: input },
                {
                    headers: { "Content-Type": "application/json" },
                    timeout: 10000,
                }
            );

            console.log("백엔드 응답:", response.data);

            const { intro, movies } = response.data;
            const titlesWithIds = movies
                .filter((movie) => movie.title && movie.title.trim())
                .slice(0, 3);

            setChatHistory((prev) => [
                ...prev,
                { type: "user", text: input },
                { type: "bot", intro, movies: titlesWithIds },
            ]);
            setInput("");
        } catch (error) {
            console.error(
                "추천 가져오기 오류:",
                error.response ? error.response.data : error.message
            );
            setChatHistory((prev) => [
                ...prev,
                { type: "user", text: input },
                {
                    type: "bot",
                    intro: "추천을 가져오는 데 문제가 발생했습니다.",
                    movies: [],
                },
            ]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleTitleClick = (title, id) => {
        console.log(`선택된 영화: ${title}, ID: ${id}`);
        setIsOpen(false);
        if (id) {
            navigate(`/movie/${id}`); // 기존 MovieDetailPage로 이동
        } else {
            navigate(`/multi?q=${encodeURIComponent(title)}`); // 검색 페이지로 이동
        }
    };

    return (
        <ChatBotContainer>
            {!isOpen && <ChatIcon onClick={() => setIsOpen(true)}>🎬</ChatIcon>}
            {isOpen && (
                <ChatWindow>
                    <ChatHeader>
                        <ChatTitle>영화 추천 챗봇</ChatTitle>
                        <CloseButton onClick={() => setIsOpen(false)}>
                            X
                        </CloseButton>
                    </ChatHeader>
                    <ChatBody>
                        {isLoading ? (
                            <PlaceholderText>로딩 중...</PlaceholderText>
                        ) : chatHistory.length > 0 ? (
                            chatHistory.map((item, index) => (
                                <div key={index} style={{ margin: "10px 0" }}>
                                    {item.type === "user" ? (
                                        <PlaceholderText
                                            style={{
                                                color: "#007bff",
                                                fontWeight: "bold",
                                            }}
                                        >
                                            나: {item.text}
                                        </PlaceholderText>
                                    ) : (
                                        <>
                                            <PlaceholderText
                                                style={{ color: "#28a745" }}
                                            >
                                                챗봇: {item.intro}
                                            </PlaceholderText>
                                            {item.movies &&
                                                item.movies.length > 0 &&
                                                item.movies.map(
                                                    (movie, idx) => (
                                                        <MovieTitle
                                                            key={idx}
                                                            onClick={() =>
                                                                handleTitleClick(
                                                                    movie.title,
                                                                    movie.id
                                                                )
                                                            }
                                                            style={{
                                                                marginTop:
                                                                    "5px",
                                                            }}
                                                        >
                                                            {movie.title}
                                                        </MovieTitle>
                                                    )
                                                )}
                                        </>
                                    )}
                                </div>
                            ))
                        ) : (
                            <PlaceholderText>
                                원하는 작품을 말해봐
                            </PlaceholderText>
                        )}
                    </ChatBody>
                    <ChatFooter>
                        <ChatInput
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="예: '슬픈 사랑 영화'"
                            onKeyPress={(e) =>
                                e.key === "Enter" && fetchRecommendations()
                            }
                            disabled={isLoading}
                        />
                        <SendButton
                            onClick={fetchRecommendations}
                            disabled={isLoading}
                        >
                            {isLoading ? "로딩 중..." : "보내기"}
                        </SendButton>
                    </ChatFooter>
                </ChatWindow>
            )}
        </ChatBotContainer>
    );
};

export default ChatBot;
