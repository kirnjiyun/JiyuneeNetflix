import styled from "styled-components";
export const NotFoundContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    text-align: center;
`;

export const NotFoundTitle = styled.h1`
    font-size: 6rem;
    margin-bottom: 1rem;
    color: #dc1a28;
`;

export const NotFoundMessage = styled.p`
    font-size: 1.5rem;
    margin-bottom: 2rem;
    color: lightgray;
`;

export const HomeButton = styled.button`
    padding: 1rem 2rem;
    font-size: 1.2rem;
    background-color: #dc1a28;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #b8151f;
    }
`;
