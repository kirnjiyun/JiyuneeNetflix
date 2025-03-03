import React from "react";
import styled, { keyframes } from "styled-components";

// 키프레임 애니메이션 정의
const pulse = keyframes`
    0% {
        opacity: 1;
    }
    50% {
        opacity: 0.5;
    }
    100% {
        opacity: 1;
    }
`;

const Container = styled.div`
    width: 100%;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const Image = styled.div`
    width: 100%;
    aspect-ratio: 2/3;
    background: #e0e0e0;
    animation: ${pulse} 1.5s infinite ease-in-out;
`;

const Title = styled.div`
    width: 70%;
    height: 20px;
    background: #e0e0e0;
    margin: 10px;
    border-radius: 4px;
    animation: ${pulse} 1.5s infinite ease-in-out;
`;

const Text = styled.div`
    width: 40%;
    height: 15px;
    background: #e0e0e0;
    margin: 0 10px 10px 10px;
    border-radius: 4px;
    animation: ${pulse} 1.5s infinite ease-in-out;
`;

const SkeletonCard = () => (
    <Container>
        <Image />
        <Title />
        <Text />
    </Container>
);

export default SkeletonCard;
