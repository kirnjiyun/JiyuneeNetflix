import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
`;

export const MoviespageContainer = styled.div`
    margin: 0 20px;
    display: grid;
    grid-template-columns: 25% 1fr;
    grid-template-rows: auto auto;
    gap: 20px;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        margin: 0 10px;
    }
`;

export const FilterContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: sticky;
    top: 0;
    height: fit-content;
    padding: 10px;

    @media (max-width: 768px) {
        margin-bottom: 10px;
        position: relative;
    }
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
        gap: 10px;
    }
`;

export const NoResultsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 40vh;
    grid-column: 1 / -1;
`;

export const NoResultsMessage = styled.p`
    font-size: 1.5rem;
    color: #777;
    text-align: center;
    margin-bottom: 1rem;
`;

export const GoBackButton = styled.button`
    padding: 0.5rem 1rem;
    border-radius: 4px;
    border: none;
    background-color: #dc1a28;
    color: white;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #b91622;
    }
`;

export const Sentinel = styled.div`
    height: 20px;
    width: 100%;
    grid-column: 1 / -1;
`;

// SkeletonCard 관련 스타일은 이제 분리된 컴포넌트로 이동했으므로 제거

export const SkeletonLoadingContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 20px;
    width: 100%;
    padding: 20px 0;
    grid-column: 1 / -1;

    @media (max-width: 768px) {
        grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    }
`;
