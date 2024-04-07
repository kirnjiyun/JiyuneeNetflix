import React from "react";
import { usePopularMoviesQuery } from "../../../../hooks/usePopularMovies";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import MovieCard from "../MovieCard/MovieCard";
import * as S from "./popularMovieSlide.styled";

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 8,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 4,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    },
};

const PopularMovieSlide = () => {
    const { data, isLoading, isError, error } = usePopularMoviesQuery();

    if (isLoading) {
        return <div>Loading... loadingspinner 추가해야됨</div>;
    }

    if (isError) {
        return <div>{error.message}</div>;
    }
    return (
        <S.CarouselContainer>
            <S.Title>Popular Movies</S.Title>
            <Carousel
                infinite={true}
                centerMode={true}
                containerClass="carousel-container"
                responsive={responsive}
                itemClass="carousel-item"
            >
                {data.results.map((movie, i) => (
                    <MovieCard movie={movie} key={i} />
                ))}
            </Carousel>
        </S.CarouselContainer>
    );
};

export default PopularMovieSlide;
