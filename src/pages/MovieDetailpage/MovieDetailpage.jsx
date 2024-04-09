import React, { useState } from "react";
import * as S from "./moviedetailpage.styled";

const MovieDetailPage = () => {
    const [expandedReview, setExpandedReview] = useState(null);

    const ReviewClick = (i) => {
        if (expandedReview === i) {
            setExpandedReview(null);
        } else {
            setExpandedReview(i);
        }
    };
    const reviews = [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vel bibendum consectetur, nisl nisi aliquam eros,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vel bibendum consectetur, nisl nisi aliquam eros, eget tincidunt nisl nunc eget velit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vel bibendum consectetur, nisl nisi aliquam eros, eget tincidunt nisl nunc eget velit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vel bibendum consectetur, nisl nisi aliquam eros, eget tincidunt nisl nunc eget velit. ",
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vel bibendum consectetur, nisl nisi aliquam eros, eget tincidunt nisl nunc eget velit.",
        "Nullam euismod, nisi vel bibendum consectetur, nisl nisi aliquam eros, eget tincidunt nisl nunc eget velit.",
        "Eget tincidunt nisl nunc eget velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vel bibendum consectetur, nisl nisi aliquam eros, eget tincidunt nisl nunc eget velit. Sed euismod, nisi vel bibendum consectetur, nisl nisi aliquam eros.",
    ];

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
                    <S.Title>Movie Title</S.Title>
                    <S.GenreList>
                        <S.Genre>Genre 1</S.Genre>
                        <S.Genre>Genre 2</S.Genre>
                    </S.GenreList>
                    <S.Synopsis>
                        Movie synopsis goes here. Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit. Sed auctor, magna a
                        bibendum bibendum, augue magna tincidunt enim, eget
                        ultricies magna augue eget lorem.
                    </S.Synopsis>
                    <S.Credits>
                        <S.CreditItem>Actor 1</S.CreditItem>
                        <S.CreditItem>Actor 2</S.CreditItem>
                        <S.CreditItem>Actor 3</S.CreditItem>
                    </S.Credits>
                    <S.ReleaseDate>Release Date: YYYY-MM-DD</S.ReleaseDate>
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
