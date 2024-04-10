import styled from "styled-components";

export const MovieDetailContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem;

    @media (min-width: 1024px) {
        padding: 2rem 10%;
    }
`;
export const MovieContent = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;

    @media (max-width: 768px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-bottom: 4rem;
    }
`;

export const PosterContainer = styled.div`
    flex: 1;
    width: 100%;
    aspect-ratio: 1/1.5;
    margin-right: 2rem;
    background-size: cover;
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
    margin-bottom: 1rem;
    line-height: 1.6;
    text-align: justify;
`;

export const Credits = styled.ul`
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    padding: 0;
    margin-bottom: 1.5rem;
`;

export const CreditItem = styled.li`
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
export const ReleaseDate = styled.p`
    margin-bottom: 1rem;
`;
export const Runtime = styled(ReleaseDate)``;
export const Vote = styled(ReleaseDate)`
    font-size: 1.5rem;
`;

export const ReviewContainer = styled.div`
    width: 100%;
`;

export const ReviewTitle = styled.h2`
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: #dc1a28;
`;

export const ReviewList = styled.ul`
    margin-bottom: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

export const ReviewItem = styled.li`
    margin-bottom: 0.5rem;
    padding: 1rem;
    border: 2px solid #e0e0e0;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
        background-color: rgba(220, 26, 40, 0.3);
        border-color: #dc1a28;
        box-shadow: 0 4px 8px rgba(220, 26, 40, 0.2);
        transform: translateY(-2px);
    }

    ${({ expanded }) =>
        expanded &&
        `
    background-color: rgba(220, 26, 40, 0.1);
    border-color: #dc1a28;
    box-shadow: 0 4px 8px rgba(220, 26, 40, 0.2);
    transform: translateY(-2px);
  `}
`;

export const ReviewText = styled.p`
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: ${({ expanded }) => (expanded ? "none" : 2)};
    -webkit-box-orient: vertical;
`;
