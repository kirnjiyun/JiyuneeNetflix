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
    margin-bottom: 4rem;
    @media (max-width: 768px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;

export const PosterContainer = styled.div`
    flex: 1;
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

export const ReviewAuthor = styled.h3`
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
    padding: 0.2rem 0.5rem;
    border: 1px solid white;
    display: inline-block;
    color: white;
`;
export const ReviewText = styled.p`
    margin-bottom: 1rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: ${({ expanded }) => (expanded ? "none" : 3)};
    -webkit-box-orient: vertical;
`;

export const ReviewDate = styled.span`
    font-size: 0.9rem;
    color: lightgray;
`;
export const ShowMoreButton = styled.button`
    background-color: #dc1a28;
    color: #fff;
    border: none;
    border-radius: 4px;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #b8151f;
    }
`;
export const NoReviewsMessage = styled.p`
    font-size: 1.2rem;
    color: #777;
    text-align: center;
    margin-top: 2rem;
`;
export const ShowLessButton = styled.button`
    background-color: #dc1a28;
    color: #fff;
    border: none;
    border-radius: 4px;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #b8151f;
    }
`;

export const ReviewButtonsContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-top: 1rem;
`;
