import React from "react";
import { usePopularMoviesQuery } from "../../../../hooks/usePopularMovies";
import * as S from "./banner.styled";
import Loading from "../../../../common/Loading/Loading";
import { useNavigate } from "react-router-dom";
const Banner = () => {
    const { data, isLoading, isError, error } = usePopularMoviesQuery();
    const navigate = useNavigate();
    const ClickBanner = () => {
        const movieId = data.results[0].id;
        navigate(`/movies/${movieId}`);
    };
    if (isLoading) {
        return <Loading />;
    }

    if (isError) {
        return <div>{error.message}</div>;
    }

    return (
        <S.BannerContainer
            onClick={ClickBanner}
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
