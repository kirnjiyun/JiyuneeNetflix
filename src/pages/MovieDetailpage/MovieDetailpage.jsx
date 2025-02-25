import React, { useState } from "react";
import * as S from "./moviedetailpage.styled";
import { useMovieDetailQuery } from "../../hooks/useMovieDetail";
import { useMovieDetailReviewsQuery } from "../../hooks/useMovieDetail";
import { useMovieDetailCastsQuery } from "../../hooks/useMovieDetail";
import { useMovieRecommendQuery } from "../../hooks/useMovieDetail";
import { useMovieVideosQuery } from "../../hooks/useMovieDetail";
import { useParams, useNavigate } from "react-router-dom";
import Loading from "../../common/Loading/Loading";
import ReviewSection from "./components/Reviews/ReviewSection";
import RecommendSection from "./components/Recommendations/RecommendSection";
import MovieModal from "./components/MovieModal/MovieModal";

const MovieDetailPage = () => {
    const [selectedSection, setSelectedSection] = useState("reviews");
    const [showModal, setShowModal] = useState(false);
    const { id } = useParams();

    // 영화 상세 정보 쿼리 (한국어 설정)
    const {
        data: movieData,
        isLoading: isMovieLoading,
        isError: isMovieError,
    } = useMovieDetailQuery(id, { language: "ko-KR" });
    // 리뷰 쿼리 (한국어 설정)
    const {
        data: reviewData,
        isLoading: isReviewLoading,
        isError: isReviewError,
    } = useMovieDetailReviewsQuery(id, { language: "ko-KR" });
    // 캐스트 쿼리 (한국어 설정)
    const {
        data: creditsData,
        isLoading: isCreditsLoading,
        isError: isCreditsError,
    } = useMovieDetailCastsQuery(id, { language: "ko-KR" });
    // 추천 영화 쿼리 (한국어 설정)
    const {
        data: recommendData,
        isLoading: isRecommendLoading,
        isError: isRecommendError,
    } = useMovieRecommendQuery(id, { language: "ko-KR" });
    // 비디오 쿼리 (한국어 설정)
    const {
        data: videosData,
        isLoading: isVideosLoading,
        isError: isVideosError,
    } = useMovieVideosQuery(id, { language: "ko-KR" });

    const handleSectionClick = (section) => {
        setSelectedSection(section);
    };

    const handleModalOpen = () => setShowModal(true);
    const handleModalClose = () => setShowModal(false);
    const handleModalClick = (event) => {
        event.stopPropagation();
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
    const navigate = useNavigate();

    // 영화 상세 정보 로딩 중일 때
    if (isMovieLoading) {
        return <Loading />;
    }

    // 영화 상세 정보 오류 발생 시
    if (isMovieError || !movieData) {
        return <div>영화 정보를 불러오는 중 오류가 발생했습니다.</div>;
    }

    return (
        <S.MovieDetailContainer>
            <S.MovieContent>
                <S.PosterContainer
                    style={{
                        backgroundImage:
                            "url(" +
                            `https://www.themoviedb.org/t/p/w500${movieData?.poster_path}` +
                            ")",
                    }}
                    onClick={handleModalOpen}
                />

                <S.MovieDetails>
                    <S.Title>{movieData?.title}</S.Title>
                    <S.GenreList>
                        {movieData?.genres.map((genre) => (
                            <S.Genre key={genre.id}>{genre.name}</S.Genre>
                        ))}
                    </S.GenreList>
                    <S.Synopsis>
                        {movieData?.overview}
                        <S.TrailerMessage>
                            포스터를 클릭하면 예고편을 볼 수 있습니다.
                        </S.TrailerMessage>
                    </S.Synopsis>
                    {isCreditsLoading ? (
                        <Loading />
                    ) : isCreditsError || !creditsData ? (
                        <p>캐스트 정보를 불러오는 중 오류가 발생했습니다.</p>
                    ) : (
                        <S.Credits>
                            {creditsData.cast.slice(0, 6).map((cast) => (
                                <S.CreditItem
                                    key={cast.id}
                                    onClick={() => handleClick(cast.id)}
                                >
                                    <>
                                        <S.CreditImage
                                            src={`https://www.themoviedb.org/t/p/w200${cast?.profile_path}`}
                                            alt={cast?.name}
                                        />
                                        <S.CreditName>
                                            {cast?.name}
                                        </S.CreditName>
                                        <S.CreditCharacter>
                                            {cast?.character}
                                        </S.CreditCharacter>
                                    </>
                                </S.CreditItem>
                            ))}
                        </S.Credits>
                    )}
                    <S.ReleaseDate>
                        📍 개봉일 : {movieData?.release_date}
                    </S.ReleaseDate>
                    <S.Runtime>
                        ⏰ 상영 시간 : {movieData?.runtime} 분
                    </S.Runtime>
                    <S.Vote> ⭐️ {movieData?.vote_average.toFixed(1)}</S.Vote>
                </S.MovieDetails>
            </S.MovieContent>
            <S.TitleContainer>
                <S.ReviewTitle
                    onClick={() => handleSectionClick("reviews")}
                    isSelected={selectedSection === "reviews"}
                >
                    📝 리뷰 ({reviewData?.total_results || 0})
                </S.ReviewTitle>
                <S.RecommendTitle
                    onClick={() => handleSectionClick("recommendations")}
                    isSelected={selectedSection === "recommendations"}
                >
                    🎞️ 추천 영화
                </S.RecommendTitle>
            </S.TitleContainer>
            {selectedSection === "reviews" &&
                (isReviewLoading ? (
                    <Loading />
                ) : isReviewError || !reviewData ? (
                    <div>리뷰를 불러오는 중 오류가 발생했습니다.</div>
                ) : (
                    <ReviewSection reviewData={reviewData} />
                ))}
            {selectedSection === "recommendations" &&
                (isRecommendLoading ? (
                    <Loading />
                ) : isRecommendError || !recommendData ? (
                    <div>추천 영화를 불러오는 중 오류가 발생했습니다.</div>
                ) : (
                    <RecommendSection recommendData={recommendData} />
                ))}

            {showModal && <S.Overlay onClick={handleModalClose} />}
            <MovieModal
                show={showModal}
                onHide={handleModalClose}
                title={movieData?.title}
                videosData={videosData}
                onClick={handleModalClick}
            />
        </S.MovieDetailContainer>
    );
};

export default MovieDetailPage;
