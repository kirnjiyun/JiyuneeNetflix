import styled from "styled-components";

export const TvDetailContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10rem;
    position: relative;

    @media (max-width: 768px) {
        padding: 1rem;
    }
`;

export const TvContent = styled.div`
    display: flex;
    gap: 1rem;
    justify-content: center;
    width: 100%;
    align-items: center;
    margin-bottom: 2rem;
    flex-direction: row;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

export const PosterContainer = styled.div`
    cursor: pointer;
    width: 800px;
    aspect-ratio: 1/1.5;
    margin-bottom: 1rem;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    @media (max-width: 768px) {
        width: 90%;
    }
`;

export const TvDetails = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
`;

export const Title = styled.h1`
    font-size: 3rem;
    margin-bottom: 0.5rem;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    letter-spacing: 1px;
    font-weight: bold;
    text-align: center;
    @media (max-width: 768px) {
        font-size: 1.5rem;
    }
`;

export const GenreList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    margin-bottom: 1rem;
    justify-content: center;
`;

export const Genre = styled.li`
    margin-right: 0.5rem;
    margin-bottom: 0.5rem;
    padding: 0.25rem 0.5rem;
    background-color: #dc1a28;
    color: white;
    border-radius: 20px;
    font-size: 1rem;
    @media (max-width: 768px) {
        font-size: 0.8rem;
    }
`;

export const Synopsis = styled.p`
    margin-bottom: 1rem;
    text-align: justify;
    font-size: 0.9rem;
    padding: 1rem;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const Credits = styled.ul`
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    padding: 0;
    margin-bottom: 1rem;
    overflow-x: hidden;
    -webkit-overflow-scrolling: touch;
    scroll-snap-type: x mandatory;
`;

export const CreditItem = styled.li`
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 1rem;
    padding: 0.5rem;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 20px;
    font-size: 0.8rem;
    color: #ffffff;
    transition: all 0.3s ease;
    scroll-snap-align: start;
    min-width: 80px;
    &:hover {
        background-color: rgba(255, 255, 255, 0.2);
        transform: translateY(-2px);
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    }
`;

export const CreditImage = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 0.5rem;
`;

export const CreditName = styled.span`
    font-weight: bold;
    text-align: center;
    margin-bottom: 0.2rem;
    font-size: 0.7rem;
`;

export const CreditCharacter = styled.span`
    color: #ccc;
    text-align: center;
    font-size: 0.6rem;
`;

export const FirstAirDate = styled.p`
    margin-bottom: 0.5rem;
    text-align: center;
    font-size: 0.9rem;
`;

export const LastAirDate = styled(FirstAirDate)``;

export const Seasons = styled(FirstAirDate)``;

export const Episodes = styled(FirstAirDate)``;

export const Vote = styled(FirstAirDate)`
    font-size: 1.2rem;
`;

export const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    width: 100%;
    padding: 10px 0;
    border-top: 1px solid white;
`;

export const ReviewTitle = styled.h2`
    cursor: pointer;
    color: ${({ isSelected }) => (isSelected ? "#dc1a28" : "white")};
    flex-wrap: nowrap;
    font-size: 1rem;
`;

export const RecommendTitle = styled(ReviewTitle)``;

export const TrailerMessage = styled.p`
    margin-top: 5px;
    font-size: 12px;
    color: #888;
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
export const NoOverview = styled.p`
    margin-bottom: 1rem;
    text-align: center;
    font-size: 1rem;
    padding: 1rem;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    color: #888;
`;
