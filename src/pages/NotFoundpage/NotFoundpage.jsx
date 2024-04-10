import React from "react";
import * as S from "./notfoundpage.styled";
import { useNavigate } from "react-router-dom";
const NotFoundpage = () => {
    const navigate = useNavigate();

    const goToHome = () => {
        navigate("/");
    };

    return (
        <S.NotFoundContainer>
            <S.NotFoundTitle>404</S.NotFoundTitle>
            <S.NotFoundMessage>Page not found</S.NotFoundMessage>
            <S.HomeButton onClick={goToHome}>Go to Home</S.HomeButton>
        </S.NotFoundContainer>
    );
};

export default NotFoundpage;
