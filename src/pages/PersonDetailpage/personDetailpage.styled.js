import styled from "styled-components";
export const Container = styled.div`
    display: flex;
    flex-direction: row;
    margin: 2rem;
    padding: 10px 150px;
    @media (max-width: 768px) {
        flex-direction: column;
        padding: 1rem;
    }
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

    /* 3줄까지 보이고 더 길면 "더보기" 버튼으로 확장 가능 */
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
