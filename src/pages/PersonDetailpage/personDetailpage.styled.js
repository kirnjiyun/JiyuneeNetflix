import styled from "styled-components";
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 2rem;
    padding: 10px 150px;
    @media (max-width: 768px) {
        flex-direction: column;
        padding: 1rem;
    }
`;

export const AboutContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 10px;
`;
export const ImageContainer = styled.div`
    width: 33.33%;
    padding-right: 10px;
    margin: 0 auto;
    @media (max-width: 768px) {
        width: 100%;
    }
`;

export const ProfileImage = styled.img`
    width: 100%;
    max-width: 300px;
    height: auto;
    border-radius: 8px;
`;
export const InfoContainer = styled.div`
    width: 66.67%;
    display: flex;
    flex-direction: column;

    @media (max-width: 768px) {
        width: 100%;
    }
`;

export const Name = styled.h1`
    font-size: 2rem;
    margin-bottom: 1rem;
`;

export const Biography = styled.p`
    font-size: 1rem;
    line-height: 1.5;
    margin-bottom: 1rem;
    border: 1px solid white;
    border-radius: 8px;
    padding: 0.5rem;
    display: -webkit-box;
    -webkit-line-clamp: ${({ isExpanded }) => (isExpanded ? "unset" : "3")};
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    cursor: pointer;
`;

export const Info = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 0.5rem;
`;

export const Label = styled.span`
    font-weight: bold;
    margin-right: 0.5rem;
`;

export const Value = styled.span``;

export const TitleContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 20px;
    width: 100%;
    border-top: 1px solid white;
    padding: 10px 0;
    @media (max-width: 768px) {
        flex-direction: column;
        gap: 10px;
    }
`;

export const MovieTitle = styled.h2`
    cursor: pointer;
    color: ${({ isSelected }) => (isSelected ? "#dc1a28" : "white")};
    flex-wrap: nowrap;
    font-size: 1rem;
`;

export const TvShowTitle = styled(MovieTitle)``;

export const TrailerMessage = styled.p`
    margin-top: 5px;
    font-size: 12px;
    color: #888;
`;
