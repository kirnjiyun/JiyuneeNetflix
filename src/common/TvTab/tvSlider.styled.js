import styled from "styled-components";

export const TabsContainer = styled.div`
    margin: 20px 0;
`;

export const TabList = styled.div`
    display: flex;
    gap: 15px; /* 기본 간격 */
    padding: 0 10px;
    margin-bottom: 20px;
    overflow-x: auto; /* 작은 화면에서 스크롤 가능 */
    position: relative; /* 밑줄 위치를 위한 상대 위치 설정 */
    scrollbar-width: thin; /* Firefox용 슬림 스크롤바 */
    scrollbar-color: #999 transparent; /* 스크롤바 색상 */

    &::-webkit-scrollbar {
        height: 6px; /* Chrome/Safari용 슬림 스크롤바 */
    }
    &::-webkit-scrollbar-thumb {
        background: #999;
        border-radius: 3px;
    }

    &::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        height: 3px; /* 밑줄 두께 */
        background: #e63946; /* 빨간색 포인트 */
        width: var(--active-width); /* 활성 탭의 너비에 맞춤 */
        transform: translateX(var(--active-offset)); /* 활성 탭 위치로 이동 */
        transition: transform 0.3s ease; /* 부드러운 이동 효과 */
    }

    /* 반응형 조정 */
    @media (max-width: 768px) {
        gap: 10px; /* 태블릿 이하에서 간격 축소 */
        padding: 0 5px;
    }

    @media (max-width: 480px) {
        gap: 8px; /* 모바일에서 더 좁게 */
    }
`;

export const Tab = styled.button`
    padding: 10px 20px;
    font-size: 1.2rem;
    background: transparent; /* 배경 제거 */
    color: ${({ active }) =>
        active ? "#e50914" : "#999"}; /* 활성: 빨간색, 비활성: 회색 */
    border: none; /* 테두리 제거 */
    cursor: pointer;
    white-space: nowrap; /* 탭 텍스트 줄바꿈 방지 */
    transition: color 0.3s ease; /* 글자색만 부드럽게 전환 */
    display: flex;
    align-items: center;
    gap: 5px; /* 아이콘과 텍스트 사이 간격 */

    &:hover {
        color: #666; /* 호버 시 중간 톤 회색 */
    }

    .icon {
        display: inline-block;
        color: ${({ active }) =>
            active ? "#e50914" : "#999"}; /* 활성 시 빨간색 */
        transition: color 0.3s ease; /* 아이콘 색상 전환 부드럽게 */
    }

    /* 반응형 조정 */
    @media (max-width: 768px) {
        padding: 8px 15px; /* 태블릿 이하에서 패딩 축소 */
        font-size: 1rem; /* 글자 크기 축소 */
    }

    @media (max-width: 480px) {
        padding: 6px 10px; /* 모바일에서 더 작게 */
        font-size: 0.9rem;
    }
`;

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(
        auto-fill,
        minmax(250px, 1fr)
    ); /* 기본: 최소 250px */
    gap: 20px;
    padding: 0 10px;

    /* 반응형 조정 */
    @media (max-width: 768px) {
        grid-template-columns: repeat(
            auto-fill,
            minmax(200px, 1fr)
        ); /* 태블릿: 최소 200px */
        gap: 15px; /* 간격 축소 */
    }

    @media (max-width: 480px) {
        grid-template-columns: repeat(
            auto-fill,
            minmax(150px, 1fr)
        ); /* 모바일: 최소 150px */
        gap: 10px; /* 더 작은 간격 */
    }
`;
