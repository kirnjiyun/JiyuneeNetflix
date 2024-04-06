import React from "react";
import { usePopularMoviesQuery } from "../../../../hooks/usePopularMovies";
import * as S from "./banner.styled";

const Banner = () => {
    const { data, isLoading, isError, error } = usePopularMoviesQuery();

    if (isLoading) {
        return <div>Loading... loadingspinner 추가해야됨</div>;
    }

    if (isError) {
        return <div>{error.message}</div>;
    }

    return (
        <S.BannerContainer
            backgroundImage={`https://image.tmdb.org/t/p/w1280/${data.results[0].backdrop_path}`}
        >
            <S.Banner>
                <S.Title>{data?.results[0].title}</S.Title>
                <S.Overview>{data?.results[0].overview}</S.Overview>
            </S.Banner>
        </S.BannerContainer>
    );
};

export default Banner;
