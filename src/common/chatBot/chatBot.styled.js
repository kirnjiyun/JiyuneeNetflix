import styled from "styled-components";

export const ChatBotContainer = styled.div`
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 1000;
`;

export const ChatIcon = styled.div`
    width: 60px;
    height: 60px;
    background-color: #007bff;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    cursor: pointer;
    font-size: 24px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
`;

export const ChatWindow = styled.div`
    width: 400px; // 크기 키우기 (기존 300px 또는 기본값에서 조정)
    height: 600px; // 크기 키우기 (기존 500px 또는 기본값에서 조정)
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    overflow: hidden;
`;

export const ChatHeader = styled.div`
    background-color: #f8f9fa;
    padding: 10px;
    border-bottom: 1px solid #dee2e6;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const ChatTitle = styled.h3`
    margin: 0;
    font-size: 18px;
    color: #333;
`;

export const CloseButton = styled.button`
    background: none;
    border: none;
    font-size: 20px;
    cursor: pointer;
    color: #dc3545;
    padding: 0;
    line-height: 1;
`;

export const ChatFooter = styled.div`
    padding: 10px;
    border-top: 1px solid #dee2e6;
    display: flex;
    gap: 10px;
`;

export const ChatInput = styled.input`
    flex: 1;
    padding: 8px;
    border: 1px solid #ced4da;
    border-radius: 4px;
    font-size: 14px;

    &:focus {
        outline: none;
        border-color: #007bff;
        box-shadow: 0 0 5px rgba(0, 123, 255, 0.3);
    }
`;

export const SendButton = styled.button`
    padding: 8px 16px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;
    transition: background-color 0.3s;

    &:hover:not(:disabled) {
        background-color: #0056b3;
    }

    &:disabled {
        background-color: #6c757d;
        cursor: not-allowed;
    }
`;

export const ChatBody = styled.div`
    flex: 1;
    padding: 20px;
    overflow-y: auto; // 스크롤 가능
    display: flex;
    flex-direction: column;
    gap: 10px;
    background-color: #f8f9fa; // 가벼운 배경색 추가 (선택 사항)
`;

export const PlaceholderText = styled.p`
    text-align: left;
    color: #666;
    margin: 5px 0;
    font-style: italic;

    &.user {
        color: #007bff;
        font-weight: bold;
    }

    &.bot {
        color: #28a745;
        font-weight: normal;
    }

    &.loading {
        color: #007bff;
        font-weight: bold;
        animation: blink 1s infinite;

        @keyframes blink {
            50% {
                opacity: 0.5;
            }
        }
    }
`;

export const MovieTitle = styled.div`
    padding: 10px;
    background-color: #f1f1f1;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
    margin-top: 5px;

    &:hover {
        background-color: #e9ecef;
    }
`;
