import React, { useState } from "react";
import * as S from "./moviedetailpage.styled";
import { useMovieDetailQuery } from "../../hooks/useMovieDetail";
import { useParams } from "react-router-dom";

import reviews from "../../constants/reviews";
const MovieDetailPage = () => {
    const [expandedReview, setExpandedReview] = useState(null);
    const { movieId } = useParams();
    const { data, isLoading, isError } = useMovieDetailQuery(movieId);
    const ReviewClick = (i) => {
        if (expandedReview === i) {
            setExpandedReview(null);
        } else {
            setExpandedReview(i);
        }
    };
    console.log("아이디", movieId);
    console.log(data);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error occurred while fetching movie details.</div>;
    }
    return (
        <S.MovieDetailContainer>
            <S.MovieContent>
                <S.PosterContainer>
                    <S.Poster
                        src="http://joyposter.cafe24.com/MoF/step/FDR427/FDR-040.jpg"
                        alt="Movie Poster"
                    />
                </S.PosterContainer>
                <S.MovieDetails>
                    <S.Title>{data?.title}</S.Title>
                    <S.GenreList>
                        {data?.genres.map((genre) => (
                            <S.Genre key={genre.id}>{genre.name}</S.Genre>
                        ))}
                    </S.GenreList>
                    <S.Synopsis>{data?.overview}</S.Synopsis>
                    <S.Credits>
                        {data?.credits.cast.slice(0, 3).map((cast) => (
                            <S.CreditItem key={cast.id}>
                                {cast.name}
                            </S.CreditItem>
                        ))}
                    </S.Credits>
                    <S.ReleaseDate>
                        Release Date: {data?.release_date}
                    </S.ReleaseDate>
                </S.MovieDetails>
            </S.MovieContent>
            <S.ReviewContainer>
                <S.ReviewTitle>Reviews</S.ReviewTitle>
                <S.ReviewList>
                    {reviews.map((review, i) => (
                        <S.ReviewItem
                            key={i}
                            onClick={() => ReviewClick(i)}
                            expanded={expandedReview === i}
                        >
                            <S.ReviewText expanded={expandedReview === i}>
                                {review}
                            </S.ReviewText>
                        </S.ReviewItem>
                    ))}
                </S.ReviewList>
            </S.ReviewContainer>
        </S.MovieDetailContainer>
    );
};
export default MovieDetailPage;
