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
                <S.Genre>{movie.genre_ids.slice(0, 2).join(", ")}</S.Genre>
                <div>
                    <S.Vote>★ {movie.vote_average.toFixed(1)}</S.Vote>
                    {movie.adult ? <S.Adult>18+</S.Adult> : null}
                </div>
            </S.MovieCard>
        </S.MovieCardContainer>
    );
};

export default MovieCard;
