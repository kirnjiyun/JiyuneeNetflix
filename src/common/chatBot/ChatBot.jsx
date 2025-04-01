import React, { useState, useEffect, useRef } from "react";
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
import useRecommendation from "../../hooks/useRecommendation";
import { initDrag } from "../../utils/dragUtils";

const ChatBot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [input, setInput] = useState("");
    const [chatHistory, setChatHistory] = useState(() => {
        const savedHistory = localStorage.getItem("chatHistory");
        return savedHistory ? JSON.parse(savedHistory) : [];
    });
    const navigate = useNavigate();
    const [position, setPosition] = useState(() => {
        const savedPosition = localStorage.getItem("chatBotPosition");
        return savedPosition
            ? JSON.parse(savedPosition)
            : { x: 0, y: window.innerHeight - 400 };
    });
    const dragRef = useRef(null);

    // 커스텀 훅 사용
    const { fetchRecommendations, isLoading } = useRecommendation();

    useEffect(() => {
        localStorage.setItem("chatHistory", JSON.stringify(chatHistory));
    }, [chatHistory]);

    useEffect(() => {
        localStorage.setItem("chatBotPosition", JSON.stringify(position));
    }, [position]);

    const handleFetchRecommendation = async () => {
        if (!input.trim()) return;

        // 사용자 입력 추가
        setChatHistory((prev) => [...prev, { type: "user", text: input }]);

        const result = await fetchRecommendations(input);

        if (result?.error) {
            setChatHistory((prev) => [
                ...prev,
                { type: "bot", intro: result.error, movies: [] },
            ]);
        } else if (result) {
            setChatHistory((prev) => [
                ...prev,
                { type: "bot", intro: result.intro, movies: result.movies },
            ]);
        }
        setInput("");
    };

    const handleTitleClick = (title, id) => {
        setIsOpen(false);
        if (id) {
            navigate(`/movie/${id}`);
        } else {
            navigate(`/multi?q=${encodeURIComponent(title)}`);
        }
    };

    // ChatIcon, ChatHeader 드래그 핸들러에 동일한 로직 적용
    const handleDragStart = (e) => {
        initDrag(e, position, setPosition);
    };

    // ChatIcon 클릭 핸들러
    const handleClick = () => {
        setIsOpen(true);
    };

    // 챗봇 창의 스타일 동적 계산
    const getChatWindowStyle = () => {
        const iconWidth = 60; // ChatIcon 너비
        const threshold = window.innerWidth / 2; // 화면 절반을 기준으로 방향 결정

        if (position.x + iconWidth / 2 > threshold) {
            // 아이콘이 화면 오른쪽 절반에 있을 때: 왼쪽으로 펼침
            return {
                transform: `translateX(-100%) translateX(-${iconWidth}px)`,
                left: 0,
            };
        } else {
            // 아이콘이 화면 왼쪽 절반에 있을 때: 오른쪽으로 펼침
            return {
                transform: `translateX(${iconWidth}px)`,
                left: 0,
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
                    <ChatHeader onMouseDown={handleDragStart}>
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
                                e.key === "Enter" && handleFetchRecommendation()
                            }
                            disabled={isLoading}
                        />
                        <SendButton
                            onClick={handleFetchRecommendation}
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
