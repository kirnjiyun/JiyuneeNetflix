import React, { useState } from "react";
import * as S from "./moviedetailpage.styled";
import { useMovieDetailQuery } from "../../hooks/useMovieDetail";
import { useMovieDetailReviewsQuery } from "../../hooks/useMovieDetail";
import { useMovieDetailCastsQuery } from "../../hooks/useMovieDetail";
import { useMovieRecommendQuery } from "../../hooks/useMovieDetail";
import { useParams } from "react-router-dom";
import Loading from "../../common/Loading/Loading";
import ReviewSection from "./components/Reviews/ReviewSection";
import RecommendSection from "./components/Recommendations/RecommendSection";
import MovieModal from "./components/MovieModal/MovieModal";

const MovieDetailPage = () => {
    const [selectedSection, setSelectedSection] = useState("reviews");
    const [showModal, setShowModal] = useState(false);
    const { id } = useParams();
    const { data, isLoading, isError } = useMovieDetailQuery(id);
    const { data: reviewData } = useMovieDetailReviewsQuery(id);
    const { data: CreditsData } = useMovieDetailCastsQuery(id);
    const { data: RecommendData } = useMovieRecommendQuery(id);

    const handleSectionClick = (section) => {
        setSelectedSection(section);
    };

    const handleModalOpen = () => setShowModal(true);
    const handleModalClose = () => setShowModal(false);

    if (isLoading) {
        return <Loading />;
    }

    if (isError) {
        return <div>Error occurred while fetching movie details.</div>;
    }

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
                    onClick={handleModalOpen}
                />

                <S.MovieDetails>
                    <S.Title>{data?.title}</S.Title>
                    <S.GenreList>
                        {data?.genres.map((genre) => (
                            <S.Genre key={genre.id}>{genre.name}</S.Genre>
                        ))}
                    </S.GenreList>
                    <S.Synopsis>
                        {data?.overview}{" "}
                        <S.TrailerMessage>
                            Click on the poster to watch the trailer
                        </S.TrailerMessage>
                    </S.Synopsis>
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
            <S.TitleContainer>
                <S.ReviewTitle
                    onClick={() => handleSectionClick("reviews")}
                    isSelected={selectedSection === "reviews"}
                >
                    📝 Reviews ({reviewData?.total_results})
                </S.ReviewTitle>
                <S.RecommendTitle
                    onClick={() => handleSectionClick("recommendations")}
                    isSelected={selectedSection === "recommendations"}
                >
                    🎞️ Recommended movies
                </S.RecommendTitle>
            </S.TitleContainer>
            {selectedSection === "reviews" && (
                <ReviewSection reviewData={reviewData} />
            )}
            {selectedSection === "recommendations" && (
                <RecommendSection recommendData={RecommendData} />
            )}

            <MovieModal
                show={showModal}
                onHide={handleModalClose}
                title={data?.title}
            />
        </S.MovieDetailContainer>
    );
};

export default MovieDetailPage;
