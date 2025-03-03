import React, { useState, useEffect, useRef } from "react";
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
    MovieItem,
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
    const [position, setPosition] = useState(() => {
        const savedPosition = localStorage.getItem("chatBotPosition");
        return savedPosition
            ? JSON.parse(savedPosition)
            : { x: 0, y: window.innerHeight - 400 };
    });
    const dragRef = useRef(null);

    useEffect(() => {
        localStorage.setItem("chatHistory", JSON.stringify(chatHistory));
    }, [chatHistory]);

    useEffect(() => {
        localStorage.setItem("chatBotPosition", JSON.stringify(position));
    }, [position]);

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

            const { intro, movies } = response.data;
            const titlesWithIds = movies
                .filter((movie) => movie.title && movie.title.trim())
                .slice(0, 3);

            setChatHistory((prev) => [
                ...prev,
                { type: "user", text: input }, // 'initialPosition' 대신 'input' 사용
                { type: "bot", intro, movies: titlesWithIds },
            ]);
            setInput("");
        } catch (error) {
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
        setIsOpen(false);
        if (id) {
            navigate(`/movie/${id}`);
        } else {
            navigate(`/multi?q=${encodeURIComponent(title)}`);
        }
    };

    // ChatIcon 드래그 핸들러
    const handleDragStart = (e) => {
        e.preventDefault();
        const startX = e.clientX - position.x;
        const startY = e.clientY - position.y;

        const handleDragMove = (e) => {
            setPosition({
                x: e.clientX - startX,
                y: e.clientY - startY,
            });
        };

        const handleDragEnd = () => {
            document.removeEventListener("mousemove", handleDragMove);
            document.removeEventListener("mouseup", handleDragEnd);
        };

        document.addEventListener("mousemove", handleDragMove);
        document.addEventListener("mouseup", handleDragEnd);
    };

    // ChatIcon 클릭 핸들러
    const handleClick = () => {
        setIsOpen(true);
    };

    // ChatHeader 드래그 핸들러
    const handleHeaderDragStart = (e) => {
        const startX = e.clientX - position.x;
        const startY = e.clientY - position.y;

        const handleHeaderDragMove = (e) => {
            setPosition({
                x: e.clientX - startX,
                y: e.clientY - startY,
            });
        };

        const handleHeaderDragEnd = () => {
            document.removeEventListener("mousemove", handleHeaderDragMove);
            document.removeEventListener("mouseup", handleHeaderDragEnd);
        };

        document.addEventListener("mousemove", handleHeaderDragMove);
        document.addEventListener("mouseup", handleHeaderDragEnd);
    };

    // 챗봇 창의 스타일 동적 계산
    const getChatWindowStyle = () => {
        const chatWindowWidth =
            window.innerWidth < 768 ? window.innerWidth * 0.9 : 500; // ChatWindow 너비
        const iconWidth = 60; // ChatIcon 너비
        const threshold = window.innerWidth / 2; // 화면 절반을 기준으로 방향 결정

        if (position.x + iconWidth / 2 > threshold) {
            // 아이콘이 화면 오른쪽 절반에 있을 때: 왼쪽으로 펼침
            return {
                transform: `translateX(-100%) translateX(-${iconWidth}px)`, // 왼쪽으로 이동
                left: 0, // ChatBotContainer 기준 왼쪽 끝
            };
        } else {
            // 아이콘이 화면 왼쪽 절반에 있을 때: 오른쪽으로 펼침
            return {
                transform: `translateX(${iconWidth}px)`, // 오른쪽으로 이동
                left: 0, // ChatBotContainer 기준 왼쪽 끝
            };
        }
    };

    return (
        <ChatBotContainer
            ref={dragRef}
            style={{ left: `${position.x}px`, top: `${position.y}px` }}
        >
            {!isOpen && (
                <ChatIcon onMouseDown={handleDragStart} onClick={handleClick}>
                    🎬
                </ChatIcon>
            )}
            {isOpen && (
                <ChatWindow style={getChatWindowStyle()}>
                    <ChatHeader onMouseDown={handleHeaderDragStart}>
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
                                원하는 작품을 말해주세요
                            </Message>
                        )}
                    </ChatBody>

                    <ChatFooter>
                        <ChatInput
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="예: '애니메이션 영화'"
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
