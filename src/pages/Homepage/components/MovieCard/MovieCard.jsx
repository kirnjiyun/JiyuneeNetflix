import React from "react";
import * as S from "./movieCard.styled";

const MovieCard = ({ movie }) => {
    return (
        <S.MovieCardContainer
            style={{
                backgroundImage:
                    "url(" +
                    `https://www.themoviedb.org/t/p/w300_and_h450_bestv2${movie.poster_path}` +
                    ")",
            }}
        >
            <S.MovieCard>
                <S.Title>{movie.title}</S.Title>
                <S.Genre>{movie.genre_ids.join(", ")}</S.Genre>
            </S.MovieCard>
        </S.MovieCardContainer>
    );
};

export default MovieCard;
