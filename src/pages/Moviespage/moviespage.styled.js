import styled from "styled-components";

export const MoviespageContainer = styled.div`
    display: grid;
    grid-template-columns: 25% 1fr;

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
