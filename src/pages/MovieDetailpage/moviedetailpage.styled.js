import styled from "styled-components";
import { Modal } from "react-bootstrap";
export const MovieDetailContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    position: relative;

    @media (min-width: 1024px) {
        padding: 2rem 10%;
    }
`;
export const MovieContent = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 4rem;
    @media (max-width: 768px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;

export const PosterContainer = styled.div`
    flex: 1;
    cursor: pointer;
    width: 100%;
    aspect-ratio: 1/1.5;
    margin-right: 2rem;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

    @media (max-width: 768px) {
        margin: 1rem;
        width: 100%;
        height: 0;
        padding-bottom: 150%;
    }
`;

export const MovieDetails = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;

    @media (max-width: 768px) {
        flex: 1;
    }
`;
export const Title = styled.h1`
    font-size: 3rem;
    margin-bottom: 1rem;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    letter-spacing: 1px;
    font-weight: bold;
    @media (max-width: 768px) {
        font-size: 2rem;
    }
`;

export const GenreList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    margin-bottom: 1rem;
`;

export const Genre = styled.li`
    margin-right: 1rem;
    margin-bottom: 1rem;
    padding: 0.5rem 1rem;
    background-color: #dc1a28;
    color: white;
    border-radius: 20px;
    font-size: 0.9rem;
`;

export const Synopsis = styled.p`
    margin-bottom: 1.5rem;
    text-align: justify;
    font-size: 1rem;
    padding: 1.5rem;
    border: 2px solid #e0e0e0;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;
export const Credits = styled.ul`
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    padding: 0;
    margin-bottom: 1.5rem;
`;

export const CreditItem = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 1rem;
    margin-bottom: 0.5rem;
    padding: 0.5rem 1rem;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 20px;
    font-size: 0.9rem;
    color: #ffffff;
    transition: all 0.3s ease;

    &:hover {
        background-color: rgba(255, 255, 255, 0.2);
        transform: translateY(-2px);
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    }
`;

export const CreditImage = styled.img`
    width: 80px;
    height: 80px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 0.5rem;
`;

export const CreditName = styled.span`
    font-weight: bold;
    text-align: center;
    margin-bottom: 0.2rem;
`;

export const CreditCharacter = styled.span`
    color: #ccc;
    text-align: center;
    font-size: 0.8rem;
`;
export const ReleaseDate = styled.p`
    margin-bottom: 1rem;
`;
export const Runtime = styled(ReleaseDate)``;
export const Vote = styled(ReleaseDate)`
    font-size: 1.5rem;
`;
export const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    width: 100%;
    padding: 20px 0;
    border-top: 1px solid white;
`;

export const ReviewTitle = styled.h2`
    cursor: pointer;
    color: ${({ isSelected }) => (isSelected ? "#dc1a28" : "white")};
    flex-wrap: nowrap;
    @media (max-width: 768px) {
        font-size: 1rem;
    }
`;

export const RecommendTitle = styled(ReviewTitle)``;
export const TrailerMessage = styled.p`
    margin-top: 10px;
    font-size: 14px;
    color: #888;
`;
export const ModalWrapper = styled(Modal)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    border-radius: 10px;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
    padding: 20px;
    color: black;
`;

export const ModalContent = styled(Modal.Body)`
    padding: 20px;
    border-top: 1px solid black;
    color: black;
`;

export const CloseButton = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
`;
export const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 90;
`;
