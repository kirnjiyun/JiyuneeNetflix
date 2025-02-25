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
    ChatFooter,
    ChatInput,
    SendButton,
    Message,
    MovieItem, // 추가
} from "./chatBot.styled";

const ChatBot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [input, setInput] = useState("");
    const [chatHistory, setChatHistory] = useState(() => {
        const savedHistory = localStorage.getItem("chatHistory");
        return savedHistory ? JSON.parse(savedHistory) : [];
    });
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        localStorage.setItem("chatHistory", JSON.stringify(chatHistory));
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
            navigate(`/movie/${id}`);
        } else {
            navigate(`/multi?q=${encodeURIComponent(title)}`);
        }
    };

    return (
        <ChatBotContainer>
            {!isOpen && <ChatIcon onClick={() => setIsOpen(true)}>🎬</ChatIcon>}
            {isOpen && (
                <ChatWindow>
                    <ChatHeader>
                        <ChatTitle>작품 추천 AI봇</ChatTitle>
                        <CloseButton onClick={() => setIsOpen(false)}>
                            ×
                        </CloseButton>
                    </ChatHeader>

                    <ChatBody>
                        {isLoading ? (
                            <Message type="loading">로딩 중...</Message>
                        ) : chatHistory.length > 0 ? (
                            chatHistory.map((item, index) => (
                                <Message key={index} type={item.type}>
                                    {item.type === "user" ? (
                                        <p>{item.text}</p>
                                    ) : (
                                        <>
                                            <p>{item.intro}</p>
                                            {item.movies &&
                                                item.movies.length > 0 &&
                                                item.movies.map(
                                                    (movie, idx) => (
                                                        <MovieItem
                                                            key={idx}
                                                            onClick={() =>
                                                                handleTitleClick(
                                                                    movie.title,
                                                                    movie.id
                                                                )
                                                            }
                                                        >
                                                            {movie.title}
                                                        </MovieItem>
                                                    )
                                                )}
                                        </>
                                    )}
                                </Message>
                            ))
                        ) : (
                            <Message type="bot">
                                원하는 작품의 느낌을 말해주세요
                            </Message>
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
