import React from "react";
import * as S from "./movieSlider.styled";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import MovieCard from "../MovieCard/MovieCard";
const MovieSlider = ({ title, movies, responsive }) => {
    return (
        <S.CarouselContainer>
            <S.Title>{title}</S.Title>
            <Carousel
                infinite={true}
                centerMode={true}
                containerClass="carousel-container"
                responsive={responsive}
                itemClass="carousel-item"
                autoPlay={true}
                autoPlaySpeed={4000}
                transitionDuration={4000}
            >
                {movies.map((movie, i) => (
                    <MovieCard movie={movie} key={i} />
                ))}
            </Carousel>
        </S.CarouselContainer>
    );
};

export default MovieSlider;
