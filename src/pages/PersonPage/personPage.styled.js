import styled from "styled-components";

export const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
    @media (max-width: 768px) {
        width: 100%;
    }
`;

export const PeopleList = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;

    @media (max-width: 1024px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

// export const PersonItem = styled.li`
//     margin-bottom: 40px;
// `;

// export const PersonName = styled.h2`
//     font-size: 24px;
//     margin-bottom: 10px;
// `;

// export const PersonImage = styled.img`
//     max-width: 100%;
//     height: auto;
//     margin-bottom: 20px;
// `;

// export const KnownForList = styled.div`
//     margin-top: 20px;
// `;

// export const KnownForItem = styled.li`
//     margin-bottom: 10px;
// `;

// export const WorkTitle = styled.strong`
//     font-size: 18px;
// `;

// export const WorkOverview = styled.p`
//     margin-top: 5px;
// `;
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
