import React, { useState } from "react";
import * as S from "./tvDetailpage.styled";
import { useTvDetailQuery } from "../../hooks/useTvDetail";
import { useTvDetailCastsQuery } from "../../hooks/useTvDetail";
import { useTvDetailReviewsQuery } from "../../hooks/useTvDetail";
import { useTvRecommendQuery } from "../../hooks/useTvDetail";
import { useTvVideosQuery } from "../../hooks/useTvDetail";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../../common/Loading/Loading";
import RecommendSection from "../../pages/TvDetailpage/components/Recommendations/RecommendationPart";
import ReviewSection from "./components/Reviews/ReviewSection";
import MovieModal from "../../pages/MovieDetailpage/components/MovieModal/MovieModal";
const TvDetailPage = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [selectedSection, setSelectedSection] = useState("reviews");
    const [showModal, setShowModal] = useState(false);
    const { data, isLoading, isError } = useTvDetailQuery(id);
    const { data: CreditsData } = useTvDetailCastsQuery(id);
    const { data: reviewData } = useTvDetailReviewsQuery(id);
    const { data: RecommendData } = useTvRecommendQuery(id);
    const { data: videosData } = useTvVideosQuery(id);
    const handleSectionClick = (section) => {
        setSelectedSection(section);
    };
    const [loadingStates, setLoadingStates] = useState({});

    const handleClick = (id) => {
        setLoadingStates((prevState) => ({
            ...prevState,
            [id]: true,
        }));
        setTimeout(() => {
            navigate(`/person/${id}`);
            setLoadingStates((prevState) => ({
                ...prevState,
                [id]: false,
            }));
        }, 1000);
    };
    const handleModalOpen = () => setShowModal(true);
    const handleModalClose = () => setShowModal(false);
    const handleModalClick = (event) => {
        event.stopPropagation();
    };

    if (isLoading) {
        return <Loading />;
    }

    if (isError) {
        return <div>Error occurred while fetching TV show details.</div>;
    }

    return (
        <S.TvDetailContainer>
            <S.TvContent>
                <S.PosterContainer
                    style={{
                        backgroundImage:
                            "url(" +
                            `https://www.themoviedb.org/t/p/w500${data.poster_path}` +
                            ")",
                    }}
                    onClick={handleModalOpen}
                />

                <S.TvDetails>
                    <S.Title>{data?.name}</S.Title>
                    <S.GenreList>
                        {data?.genres.map((genre) => (
                            <S.Genre key={genre.id}>{genre.name}</S.Genre>
                        ))}
                    </S.GenreList>
                    <S.Synopsis>
                        {data?.overview ? (
                            <>{data.overview}</>
                        ) : (
                            <S.NoOverview>
                                There is no overview available.
                            </S.NoOverview>
                        )}
                        <S.TrailerMessage>
                            Click on the poster to watch the trailer
                        </S.TrailerMessage>
                    </S.Synopsis>
                    <S.Credits>
                        {CreditsData && CreditsData.cast ? (
                            CreditsData.cast.slice(0, 6).map((cast) => (
                                <S.CreditItem
                                    key={cast.id}
                                    onClick={() => handleClick(cast.id)}
                                >
                                    {loadingStates[cast.id] ? (
                                        <Loading />
                                    ) : (
                                        <>
                                            <S.CreditImage
                                                src={`https://www.themoviedb.org/t/p/w200${cast.profile_path}`}
                                                alt={cast.name}
                                            />
                                            <S.CreditName>
                                                {cast.name}
                                            </S.CreditName>
                                            <S.CreditCharacter>
                                                {cast.character}
                                            </S.CreditCharacter>
                                        </>
                                    )}
                                </S.CreditItem>
                            ))
                        ) : (
                            <Loading />
                        )}
                    </S.Credits>
                    <S.FirstAirDate>
                        📍 First Air Date: {data?.first_air_date}
                    </S.FirstAirDate>
                    <S.LastAirDate>
                        📍 Last Air Date: {data?.last_air_date}
                    </S.LastAirDate>
                    <S.Seasons>
                        🎥 Number of Seasons: {data?.number_of_seasons}
                    </S.Seasons>
                    <S.Episodes>
                        📺 Number of Episodes: {data?.number_of_episodes}
                    </S.Episodes>
                    <S.Vote>⭐️ {data?.vote_average.toFixed(1)}</S.Vote>
                </S.TvDetails>
            </S.TvContent>
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
                    📺 Recommended TV Shows
                </S.RecommendTitle>
            </S.TitleContainer>
            {selectedSection === "reviews" && (
                <ReviewSection reviewData={reviewData} />
            )}
            {selectedSection === "recommendations" && (
                <RecommendSection recommendData={RecommendData} />
            )}
            {showModal && <S.Overlay onClick={handleModalClose} />}
            <MovieModal
                show={showModal}
                onHide={handleModalClose}
                title={data?.name}
                videosData={videosData}
                onClick={handleModalClick}
            />
        </S.TvDetailContainer>
    );
};

export default TvDetailPage;
