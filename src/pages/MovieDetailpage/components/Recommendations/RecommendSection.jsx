import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./recommendSection.styled";
import MovieCard from "../../../../common/MovieCard/MovieCard";

const RecommendSection = ({ recommendData }) => {
    const navigate = useNavigate();
    const ClickCard = (movie) => {
        navigate(`/movies/${movie.id}`);
        window.scrollTo(0, 0);
    };

    const hasResults = recommendData?.results?.length > 0;

    return (
        <>
            {hasResults ? (
                <>
                    <S.RecommendSectionContainer>
                        <S.MoviesContainer>
                            {recommendData.results.map((movie) => (
                                <MovieCard
                                    onClick={ClickCard}
                                    key={movie.id}
                                    movie={movie}
                                />
                            ))}
                        </S.MoviesContainer>
                    </S.RecommendSectionContainer>
                </>
            ) : (
                <S.NoResultsContainer>
                    <S.NoResultsMessage>
                        No recommended movies found.
                    </S.NoResultsMessage>
                </S.NoResultsContainer>
            )}
        </>
    );
};

export default RecommendSection;
