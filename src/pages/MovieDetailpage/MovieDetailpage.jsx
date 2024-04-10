import React, { useState } from "react";
import * as S from "./moviedetailpage.styled";
import { useMovieDetailQuery } from "../../hooks/useMovieDetail";
import { useMovieDetailReviewsQuery } from "../../hooks/useMovieDetail";
import { useMovieDetailCastsQuery } from "../../hooks/useMovieDetail";
import { useParams } from "react-router-dom";
const MovieDetailPage = () => {
    const [expandedReview, setExpandedReview] = useState(null);
    const [visibleReviews, setVisibleReviews] = useState(5);
    const { id } = useParams();
    const { data, isLoading, isError } = useMovieDetailQuery(id);
    const { data: reviewData } = useMovieDetailReviewsQuery(id);
    const { data: CreditsData } = useMovieDetailCastsQuery(id);
    const handleReviewClick = (i) => {
        if (expandedReview === i) {
            setExpandedReview(null);
        } else {
            setExpandedReview(i);
        }
    };

    const showMoreReviews = () => {
        setVisibleReviews(reviewData?.results?.length);
    };

    const showLessReviews = () => {
        setVisibleReviews(5);
    };

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error occurred while fetching movie details.</div>;
    }

    const displayedReviews = reviewData?.results?.slice(0, visibleReviews);
    const hasMoreReviews = reviewData?.results?.length > visibleReviews;
    return (
        <S.MovieDetailContainer>
            <S.MovieContent>
                <S.PosterContainer
                    style={{
                        backgroundImage:
                            "url(" +
                            `https://www.themoviedb.org/t/p/w500${data.poster_path}` +
                            ")",
                    }}
                />

                <S.MovieDetails>
                    <S.Title>{data?.title}</S.Title>
                    <S.GenreList>
                        {data?.genres.map((genre) => (
                            <S.Genre key={genre.id}>{genre.name}</S.Genre>
                        ))}
                    </S.GenreList>
                    <S.Synopsis>{data?.overview}</S.Synopsis>
                    <S.Credits>
                        {CreditsData?.cast?.slice(0, 6).map((cast) => (
                            <S.CreditItem key={cast.id}>
                                <S.CreditImage
                                    src={`https://www.themoviedb.org/t/p/w200${cast.profile_path}`}
                                    alt={cast.name}
                                />
                                <S.CreditName>{cast.name}</S.CreditName>
                                <S.CreditCharacter>
                                    {cast.character}
                                </S.CreditCharacter>
                            </S.CreditItem>
                        ))}
                    </S.Credits>
                    <S.ReleaseDate>
                        Release Date : {data?.release_date}
                    </S.ReleaseDate>
                    <S.Runtime>RunTime : {data?.runtime} minutes</S.Runtime>
                    <S.Vote>★ {data?.vote_average.toFixed(1)}</S.Vote>
                </S.MovieDetails>
            </S.MovieContent>
            <S.ReviewContainer>
                <S.ReviewTitle>
                    Reviews ({reviewData?.total_results})
                </S.ReviewTitle>
                {reviewData?.results?.length === 0 ? (
                    <S.NoReviewsMessage>
                        No reviews have been written yet.
                    </S.NoReviewsMessage>
                ) : (
                    <>
                        <S.ReviewList>
                            {displayedReviews?.map((review, i) => (
                                <S.ReviewItem
                                    key={review.id}
                                    onClick={() => handleReviewClick(i)}
                                    expanded={expandedReview === i}
                                >
                                    <div>
                                        <S.ReviewAuthor>
                                            {review.author}
                                        </S.ReviewAuthor>
                                        <S.ReviewText
                                            expanded={expandedReview === i}
                                        >
                                            {review.content}
                                        </S.ReviewText>
                                        <S.ReviewDate>
                                            {new Date(
                                                review.created_at
                                            ).toLocaleDateString()}
                                        </S.ReviewDate>
                                    </div>
                                </S.ReviewItem>
                            ))}
                        </S.ReviewList>
                        <S.ReviewButtonsContainer>
                            {hasMoreReviews && (
                                <S.ShowMoreButton onClick={showMoreReviews}>
                                    More...
                                </S.ShowMoreButton>
                            )}
                            {visibleReviews > 5 && (
                                <S.ShowLessButton onClick={showLessReviews}>
                                    close
                                </S.ShowLessButton>
                            )}
                        </S.ReviewButtonsContainer>
                    </>
                )}
            </S.ReviewContainer>
        </S.MovieDetailContainer>
    );
};
export default MovieDetailPage;
