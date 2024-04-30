import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const TvspageContainer = styled.div`
    margin: 0 20px;
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
        position: fixed;
        top: 0;
        left: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
        width: 100%;
        height: 100%;
        background-color: #fff;
        z-index: 100;
        transition: left 0.3s ease-in-out;
        padding: 1rem;
        overflow-y: auto;
        margin-bottom: 20px;
    }
`;

export const TvsContainer = styled.div`
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
    flex-wrap: wrap;

    .pagination {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        width: 50vw;
        min-width: 380px;
        flex-wrap: wrap;
        padding: 40px 20px 40px 20px;
    }

    .page-item {
        cursor: pointer;
        height: 30px;
        font-size: 1.2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0 4px;
        border: 1px solid rgba(0, 0, 0, 0.2);
        border-radius: 3px;

        &:hover {
            color: white;
            background-color: #dc1a28;
        }
    }

    .active {
        color: white;
        background-color: #dc1a28;
        transition: all 0.3s;
        transform: scale(1.2);
        padding: 0px 8px 0px 8px;
        height: 27px;
        justify-content: center;
        align-items: center;
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

export const GoBackButton = styled.button`
    padding: 0.5rem 1rem;
    border-radius: 4px;
    border: none;
    background-color: #dc1a28;
    color: white;
    cursor: pointer;
    margin-top: 1rem;

    &:hover {
        background-color: #b91622;
    }
`;

export const FilterButton = styled.button`
    display: none;
    padding: 0.5rem 1rem;
    background-color: #333333;
    color: #ca1723;
    font-weight: bold;
    text-shadow: 1px 1px 1px black;
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    cursor: pointer;

    @media (max-width: 768px) {
        display: block;
        margin-bottom: 1rem;
    }
`;

export const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100;
`;

export const ModalContent = styled.div`
    border-radius: 4px;
    width: 80%;
    max-width: 500px;
    position: relative;
`;
