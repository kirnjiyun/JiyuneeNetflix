import styled from "styled-components";

export const FooterContainer = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #767676;
    margin-top: 1rem;
    padding: 2rem 2rem;

    @media (max-width: 768px) {
        padding: 1rem;
    }
`;

export const FooterText = styled.p`
    font-size: 1rem;
    text-align: center;

    @media (max-width: 768px) {
        font-size: 0.8rem;
    }
`;
export const Icon = styled.div`
    margin-left: 2rem;
    width: 2rem;
    height: 2rem;
`;
