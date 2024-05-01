import React from "react";
import MovieCard from "../../../../common/MovieCard/MovieCard";
import { useNavigate } from "react-router-dom";
import * as S from "./movieCredits.styled";
const MovieCredits = ({ MovieCreditsData }) => {
    const navigate = useNavigate();
    const ClickCard = (movie) => {
        navigate(`/movies/${movie.id}`);
        window.scrollTo(0, 0);
    };
    return (
        <S.MoviesContainer>
            {MovieCreditsData.cast.map((movie) => (
                <MovieCard key={movie.id} movie={movie} onClick={ClickCard} />
            ))}
        </S.MoviesContainer>
    );
};
export default MovieCredits;
