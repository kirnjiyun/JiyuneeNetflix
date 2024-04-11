import styled from "styled-components";

export const BannerContainer = styled.div`
    position: relative;
    cursor: pointer;
    width: 100%;
    height: 56vh;
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: left;
    padding-left: 30px;
    background-image: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0),
            rgba(0, 0, 0, 0.8)
        ),
        url(${({ backgroundImage }) => backgroundImage});

    @media (max-width: 768px) {
        height: 50vh;
        justify-content: center;
        padding-left: 0;
        padding: 20px;
    }
`;

export const BannerContent = styled.div`
    text-align: left;

    @media (max-width: 768px) {
        text-align: center;
    }
`;

export const Banner = styled.p`
    color: white;
    font-size: 3rem;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    margin-bottom: 1rem;

    @media (max-width: 768px) {
        font-size: 2rem;
        text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
        margin-bottom: 0.5rem;
    }
`;

export const Title = styled.h1`
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 1rem;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

    @media (max-width: 768px) {
        font-size: 2rem;
        text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
        margin-bottom: 0.5rem;
    }
`;

export const Overview = styled.p`
    font-size: 1.25rem;
    line-height: 1.5;
    max-width: 600px;
    margin-bottom: 2rem;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

    @media (max-width: 768px) {
        font-size: 1rem;
        line-height: 1.4;
        max-width: 100%;
        margin-bottom: 1rem;
        text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
    }
`;
