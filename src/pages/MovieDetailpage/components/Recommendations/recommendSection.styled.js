import styled from "styled-components";

export const RecommendSectionContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const MoviesContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;

    @media (max-width: 768px) {
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    }

    @media (max-width: 576px) {
        grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    }
`;
export const NoResultsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;
export const NoResultsMessage = styled.p`
    font-size: 2rem;
    color: #777;
    text-align: center;
`;
