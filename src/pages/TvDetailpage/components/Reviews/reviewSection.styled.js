import styled from "styled-components";
export const ReviewContainer = styled.div`
    width: 100%;
`;

// export const ReviewTitle = styled.h2`
//     font-size: 1.5rem;
//     margin-bottom: 1rem;
//     color: #dc1a28;
// `;

export const ReviewList = styled.ul`
    margin-bottom: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

export const ReviewItem = styled.li`
    margin-bottom: 0.5rem;
    padding: 1rem;
    border: 2px solid #e0e0e0;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
        background-color: rgba(220, 26, 40, 0.3);
        border-color: #dc1a28;
        box-shadow: 0 4px 8px rgba(220, 26, 40, 0.2);
        transform: translateY(-2px);
    }

    ${({ expanded }) =>
        expanded &&
        `
    background-color: rgba(220, 26, 40, 0.1);
    border-color: #dc1a28;
    box-shadow: 0 4px 8px rgba(220, 26, 40, 0.2);
    transform: translateY(-2px);
  `}
`;

export const ReviewAuthor = styled.h3`
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
    padding: 0.2rem 0.5rem;
    border: 1px solid white;
    display: inline-block;
    color: white;
`;
export const ReviewText = styled.p`
    margin-bottom: 1rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: ${({ expanded }) => (expanded ? "none" : 3)};
    -webkit-box-orient: vertical;
`;

export const ReviewDate = styled.span`
    font-size: 0.9rem;
    color: lightgray;
`;
export const ShowMoreButton = styled.button`
    background-color: #dc1a28;
    color: #fff;
    border: none;
    border-radius: 4px;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #b8151f;
    }
`;
export const NoReviewsMessage = styled.p`
    font-size: 1.2rem;
    color: #777;
    text-align: center;
    margin-top: 2rem;
`;
export const ShowLessButton = styled.button`
    background-color: #dc1a28;
    color: #fff;
    border: none;
    border-radius: 4px;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #b8151f;
    }
`;

export const ReviewButtonsContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-top: 1rem;
`;
