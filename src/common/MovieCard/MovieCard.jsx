import React from "react";
import * as S from "./movieCard.styled";
import { useMovieGenreQuery } from "../../hooks/useMovieGenre";

const MovieCard = ({ movie, onClick }) => {
    const { data: genreData } = useMovieGenreQuery();

    const showGenre = (genreIDList) => {
        if (genreData) {
            const genreNameList = genreIDList.map((id) => {
                const genreObject = genreData.find((genre) => genre.id === id);
                return genreObject ? genreObject.name : "";
            });
            return genreNameList.slice(0, 2).join(", ");
        }
        return "";
    };

    const handleClick = () => {
        onClick(movie);
    };

    return (
        <S.MovieCardContainer
            style={{
                backgroundImage:
                    "url(" +
                    `https://www.themoviedb.org/t/p/w300_and_h450_bestv2${movie.poster_path}` +
                    ")",
            }}
            onClick={handleClick}
        >
            <S.MovieCard>
                <S.Title>{movie.title}</S.Title>
                <S.Genre>{showGenre(movie.genre_ids)}</S.Genre>
                <div>
                    <S.Vote>★ {movie.vote_average.toFixed(1)}</S.Vote>
                    {movie.adult ? <S.Adult>18+</S.Adult> : null}
                </div>
            </S.MovieCard>
        </S.MovieCardContainer>
    );
};

export default MovieCard;
