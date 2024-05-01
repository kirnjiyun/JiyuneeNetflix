import styled from "styled-components";

export const PersonItem = styled.li`
    display: flex;
    flex-direction: row;
    margin-bottom: 40px;
    border: 1px solid white;
    min-width: 400px;
    overflow: hidden;
    height: 300px;
    align-items: flex-start;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    padding: 1rem;
    cursor: pointer;
    transition: background-color 0.3s ease;
    justify-content: center;
    &:hover {
        background-color: rgba(255, 255, 255, 0.2);
    }

    @media (max-width: 768px) {
        flex-direction: column;
        height: auto;
        min-width: 100%;
    }
`;

export const KnownForList = styled.div`
    margin-top: 20px;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    > p {
        margin-bottom: 10px;
    }
`;

export const ImageContainer = styled.div`
    width: 200px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 768px) {
        width: 100%;
        height: 200px;
        margin-bottom: 1rem;
    }
`;

export const Info = styled.div`
    padding-left: 20px;
    display: flex;
    flex-direction: column;

    @media (max-width: 768px) {
        padding-left: 0;
    }
`;

export const PersonName = styled.h2`
    font-size: 24px;
    margin-bottom: 10px;

    @media (max-width: 768px) {
        font-size: 20px;
    }
`;

export const PersonImage = styled.img`
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
`;

export const KnownForItem = styled.li`
    margin-bottom: 10px;
`;

export const WorkTitle = styled.strong`
    font-size: 14px;

    @media (max-width: 768px) {
        font-size: 12px;
    }
`;

export const DepartmentBadge = styled.span`
    margin-right: 0.5rem;
    margin-bottom: 0.5rem;
    padding: 0.25rem 0.5rem;
    background-color: #dc1a28;
    color: white;
    border-radius: 20px;
    font-size: 1rem;

    @media (max-width: 768px) {
        font-size: 0.8rem;
    }
`;

export const GenderAndDepartment = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 5px;
    justify-content: center;
`;
