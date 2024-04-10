import React from "react";
import { Grid } from "react-loader-spinner";
import * as S from "./loading.styled";

const Loading = () => {
    return (
        <S.LoadingContainer>
            <Grid
                height="80"
                width="80"
                ariaLabel="grid-loading"
                radius="12.5"
                wrapperStyle={{}}
                wrapperClass="grid-wrapper"
                color="#ffffff"
            />
        </S.LoadingContainer>
    );
};

export default Loading;
