import styled from "styled-components";
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;
export const MoviespageContainer = styled.div`
    display: grid;
    grid-template-columns: 25% 1fr;
    grid-template-rows: auto auto;
    gap: 20px;
    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

export const FilterContainer = styled.div`
    display: flex;
    flex-direction: column;

    @media (max-width: 768px) {
        margin-bottom: 20px;
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
    }
`;
export const PagenationWrap = styled.div`
    grid-column: 1 / -1;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;

    .pagination {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 2px;
        width: 50vw;
        min-width: 380px;
        flex-wrap: wrap;
        padding: 40px 20px 40px 20px;
    }

    .page-item {
        cursor: pointer;
        height: 27px;
        display: flex;
        justify-content: center;
        align-items: center;

        border: 1px solid rgba(0, 0, 0, 0.2);
        border-radius: 3px;
        margin-right: 4px;
        padding: 0px 8px 0px 8px;

        &:hover {
            color: white;
            background-color: #dc1a28;
            width: fit-content;
        }
    }
    .active {
        color: white;
        background-color: #dc1a28;
        transition: all 0.3s;
        transform: scale(1.3);
    }
    .break {
        height: 27px;
        display: flex;
        justify-content: center;
        align-items: center;

        border-radius: 3px;
        margin-right: 4px;
        padding: 0px 8px 0px 8px;
    }

    .previous {
        height: 27px;
        display: flex;
        justify-content: center;
        align-items: center;

        border-radius: 3px;
        margin-right: 4px;
        padding: 0px 8px 0px 8px;
    }
`;
export const NoResultsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

export const NoResultsMessage = styled.p`
    font-size: 2rem;
    color: #777;
    text-align: center;
`;
