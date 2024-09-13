import styled from "styled-components";

// 기본 컨테이너
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 20px;
`;

// 영화 컨테이너 (큰 화면 4개, 모바일 1개)
export const MoviespageContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    margin-top: 20px;

    @media (max-width: 1024px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 480px) {
        grid-template-columns: repeat(2, 1fr);
    }
`;

// TV 컨테이너 (큰 화면 4개, 모바일 1개)
export const TvsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    margin-top: 20px;

    @media (max-width: 1024px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 480px) {
        grid-template-columns: 1fr;
    }
`;

// 사람 목록 컨테이너 (큰 화면 3개, 모바일 1개)
export const PeopleList = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;

    @media (max-width: 1024px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }
`;

// 페이지네이션 스타일
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

// 검색 결과 없을 때 스타일
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
