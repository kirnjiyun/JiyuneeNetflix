import styled from "styled-components";

export const MovieCardContainer = styled.div`
    position: relative;
    width: 100%;
    padding-top: 150%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    transition: transform 0.3s;
    cursor: pointer;

    &:hover {
        transform: scale(1.05);
    }
`;

export const MovieCard = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 16px;
    background-color: rgba(0, 0, 0, 0.7);
    color: white;
    transition: transform 0.3s;

    ${MovieCardContainer}:hover & {
        transform: translateY(-10px);
    }
`;

export const Title = styled.h2`
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 8px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

export const Genre = styled.p`
    font-size: 0.9rem;
    opacity: 0.8;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;
