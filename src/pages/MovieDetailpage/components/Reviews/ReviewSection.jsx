import React, { useState } from "react";
import * as S from "./reviewSection.styled";

const ReviewSection = ({ reviewData }) => {
    const [expandedReview, setExpandedReview] = useState(null);
    const [visibleReviews, setVisibleReviews] = useState(5);

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

    const displayedReviews = reviewData?.results?.slice(0, visibleReviews);
    const hasMoreReviews = reviewData?.results?.length > visibleReviews;

    return (
        <S.ReviewContainer>
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
    );
};

export default ReviewSection;
