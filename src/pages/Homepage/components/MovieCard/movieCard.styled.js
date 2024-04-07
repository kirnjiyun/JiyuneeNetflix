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
        transform: scale(1.5) translate(20px);
        z-index: 2;

        & > div {
            opacity: 1;
        }
        &:hover {
            transform: scale(1.5);
            z-index: 2;
        }
    }
`;

export const MovieCard = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    padding-left: 10px;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    color: white;
    transition: opacity 0.3s ease, transform 0.3s;
    opacity: 0;
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
    font-size: 0.6rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;
export const Vote = styled.p`
    font-size: 1rem;
`;
export const Adult = styled.p`
    background-color: #dc1a28;
    color: #ffffff;
    padding: 4px 8px;
    border-radius: 4px;
    font-weight: bold;
    font-size: 0.6rem;
    width: fit-content;
`;
