import styled, { keyframes } from "styled-components";

//
// 챗봇 열릴 때 아래에서 위로 슬라이드되는 애니메이션
//
const slideUp = keyframes`
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

//
// 아이콘이 반짝반짝 빛나는 애니메이션
//
const sparkle = keyframes`
  0% {
    box-shadow: 0 0 8px rgba(229, 9, 20, 0.5), 0 0 12px rgba(229, 9, 20, 0.3);
  }
  50% {
    box-shadow: 0 0 24px rgba(229, 9, 20, 0.9), 0 0 30px rgba(229, 9, 20, 0.5);
  }
  100% {
    box-shadow: 0 0 8px rgba(229, 9, 20, 0.5), 0 0 12px rgba(229, 9, 20, 0.3);
  }
`;

//
// 챗봇이 위치할 컨테이너 (우측 하단 고정)
//
export const ChatBotContainer = styled.div`
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 1000;
`;

//
// 챗봇 아이콘 (닫혀있을 때 보이는 동그란 버튼)
//
export const ChatIcon = styled.div`
    width: 60px;
    height: 60px;
    background-color: #e50914; /* 붉은 톤 */
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffffff;
    cursor: pointer;
    font-size: 28px;
    transition: transform 0.3s ease;

    /* 반짝반짝 빛나는 애니메이션 */
    animation: ${sparkle} 2s infinite;

    &:hover {
        transform: scale(1.1);
    }
`;

//
// 실제 챗봇 창
//
export const ChatWindow = styled.div`
    background-color: #141414; /* 넷플릭스 스타일의 진한 배경 */
    border-radius: 12px;
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.4);
    display: flex;
    flex-direction: column;
    overflow: hidden;
    animation: ${slideUp} 0.5s ease-out;

    /* 반응형: 모바일(작은 화면)에서는 화면의 90%, 80% 사용 */
    width: 90vw;
    height: 80vh;

    /* 데스크탑(768px 이상)에서는 고정 크기 */
    @media (min-width: 768px) {
        width: 500px;
        height: 650px;
    }
`;

//
// 챗봇 상단 헤더 영역
//
export const ChatHeader = styled.div`
    background-color: #000000; /* 상단 헤더는 완전 블랙 */
    padding: 15px;
    border-bottom: 1px solid #333;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const ChatTitle = styled.h3`
    margin: 0;
    font-size: 20px;
    color: #e50914; /* 빨간색 포인트 */
`;

export const CloseButton = styled.button`
    background: transparent;
    border: none;
    font-size: 24px;
    cursor: pointer;
    color: #ffffff;
    transition: color 0.2s ease;

    &:hover {
        color: #e50914;
    }
`;

//
// 챗봇 메인 대화 영역
//
export const ChatBody = styled.div`
    flex: 1;
    padding: 15px;
    overflow-y: auto;
    background-color: #1f1f1f;
    display: flex;
    flex-direction: column;
    gap: 10px;

    /* 스크롤바 스타일 (WebKit 계열 브라우저) */
    ::-webkit-scrollbar {
        width: 8px; /* 스크롤바 너비 */
    }
    ::-webkit-scrollbar-track {
        background: #2c2c2c; /* 스크롤바 트랙 배경색 */
    }
    ::-webkit-scrollbar-thumb {
        background-color: #e50914; /* 스크롤바 '막대' 색상 */
        border-radius: 4px;
    }
    ::-webkit-scrollbar-thumb:hover {
        background-color: #f6121d; /* 호버 시 더 밝게 */
    }
`;

//
// 챗봇 하단 입력 영역
//
export const ChatFooter = styled.div`
    padding: 15px;
    border-top: 1px solid #333;
    display: flex;
    gap: 10px;
    background-color: #141414;
`;

//
// 입력창 스타일
//
export const ChatInput = styled.input`
    flex: 1;
    padding: 10px;
    border: 1px solid #333;
    border-radius: 6px;
    font-size: 16px;
    background-color: #2c2c2c;
    color: #ffffff;

    &:focus {
        outline: none;
        border-color: #e50914;
        box-shadow: 0 0 5px rgba(229, 9, 20, 0.5);
    }
`;

//
// 보내기 버튼 스타일
//
export const SendButton = styled.button`
    padding: 10px 20px;
    background-color: #e50914;
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s;

    &:hover:not(:disabled) {
        background-color: #f6121d;
    }

    &:disabled {
        background-color: #9e9e9e;
        cursor: not-allowed;
    }
`;

//
// 대화 메시지 스타일
//
export const Message = styled.div`
    max-width: 80%;
    padding: 12px;
    border-radius: 10px;
    background-color: ${(props) =>
        props.type === "user" ? "#e50914" : "#333333"};
    color: #ffffff;
    align-self: ${(props) =>
        props.type === "user" ? "flex-end" : "flex-start"};
    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.2);
    word-wrap: break-word;
`;

//
// 추천 작품 스타일 (호버 시 트랜지션 효과)
//
export const MovieItem = styled.div`
    cursor: pointer;
    margin-top: 5px;
    padding: 8px;
    background-color: #2c2c2c;
    border-radius: 5px;
    color: #ffffff;
    transition: background-color 0.3s ease, transform 0.3s ease;

    &:hover {
        background-color: #333333;
        transform: scale(1.02);
    }
`;
