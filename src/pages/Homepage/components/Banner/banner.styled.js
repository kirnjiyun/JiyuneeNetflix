import styled from "styled-components";

export const BannerContainer = styled.div`
    position: relative;
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
`;

export const BannerContent = styled.div`
    text-align: left;
`;

export const Banner = styled.p`
    color: white;
    font-size: 3rem;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    margin-bottom: 1rem;
`;

export const Title = styled.h1`
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 1rem;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

export const Overview = styled.p`
    font-size: 1.25rem;
    line-height: 1.5;
    max-width: 600px;
    margin-bottom: 2rem;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;
