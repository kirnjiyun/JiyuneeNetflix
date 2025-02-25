import React, { useState } from "react";
import { usePersonDetailQuery } from "../../hooks/usePersonDetail";
import { usePersonMovieQuery } from "../../hooks/usePersonDetail";
import { usePersonTvQuery } from "../../hooks/usePersonDetail";
import { useParams } from "react-router-dom";
import Loading from "../../common/Loading/Loading";
import * as S from "./personDetailpage.styled";
import MovieCredits from "./components/MovieCredits/MovieCredits";
import TvCredits from "./components/TvCredits/TvCredits";

export default function PersonDetailPage() {
    const [selectedSection, setSelectedSection] = useState("movie");
    const [isBiographyExpanded, setIsBiographyExpanded] = useState(false);

    const handleSectionClick = (section) => {
        setSelectedSection(section);
    };

    const { id } = useParams();

    // 인물 상세 정보 쿼리
    const {
        data: personData,
        isLoading: isPersonLoading,
        isError: isPersonError,
    } = usePersonDetailQuery(id);
    // 영화 크레딧 쿼리
    const {
        data: movieCreditsData,
        isLoading: isMovieLoading,
        isError: isMovieError,
    } = usePersonMovieQuery(id);
    // TV 크레딧 쿼리
    const {
        data: tvCreditsData,
        isLoading: isTvLoading,
        isError: isTvError,
    } = usePersonTvQuery(id);

    // 인물 정보 로딩 중일 때
    if (isPersonLoading) {
        return <Loading />;
    }

    // 인물 정보 오류 발생 시
    if (isPersonError || !personData) {
        return <div>인물 정보를 불러오는 중 오류가 발생했습니다.</div>;
    }

    const toggleBiographyExpansion = () => {
        setIsBiographyExpanded((prevState) => !prevState);
    };

    return (
        <S.Container>
            <S.AboutContainer>
                <S.ImageContainer>
                    {personData.profile_path ? (
                        <S.ProfileImage
                            src={`https://image.tmdb.org/t/p/w500${personData.profile_path}`}
                            alt={personData.name}
                        />
                    ) : (
                        <div>이미지가 없습니다</div>
                    )}
                </S.ImageContainer>
                <S.InfoContainer>
                    <S.Name>{personData.name}</S.Name>
                    <S.Biography
                        isExpanded={isBiographyExpanded}
                        onClick={toggleBiographyExpansion}
                    >
                        {personData.biography
                            ? isBiographyExpanded
                                ? personData.biography
                                : `${personData.biography.slice(0, 150)}...`
                            : "소개가 없습니다"}
                    </S.Biography>
                    <S.Info>
                        <S.Label>주요 분야:</S.Label>
                        <S.Value>
                            {personData.known_for_department || "알 수 없음"}
                        </S.Value>
                    </S.Info>
                    <S.Info>
                        <S.Label>생일:</S.Label>
                        <S.Value>{personData.birthday || "N/A"}</S.Value>
                    </S.Info>
                    <S.Info>
                        <S.Label>출생지:</S.Label>
                        <S.Value>{personData.place_of_birth || "N/A"}</S.Value>
                    </S.Info>
                    <S.Info>
                        <S.Label>다른 이름:</S.Label>
                        <S.Value>
                            {personData.also_known_as?.length > 0
                                ? personData.also_known_as
                                      .slice(0, 3)
                                      .join(", ")
                                : "N/A"}
                        </S.Value>
                    </S.Info>
                </S.InfoContainer>
            </S.AboutContainer>

            <S.TitleContainer>
                <S.MovieTitle
                    onClick={() => handleSectionClick("movie")}
                    isSelected={selectedSection === "movie"}
                >
                    🎞️ 영화
                </S.MovieTitle>
                <S.TvShowTitle
                    onClick={() => handleSectionClick("TvShow")}
                    isSelected={selectedSection === "TvShow"}
                >
                    📺 TV 쇼
                </S.TvShowTitle>
            </S.TitleContainer>

            {selectedSection === "movie" &&
                (isMovieLoading ? (
                    <Loading />
                ) : isMovieError || !movieCreditsData ? (
                    <div>영화 크레딧을 불러오는 중 오류가 발생했습니다.</div>
                ) : (
                    <MovieCredits MovieCreditsData={movieCreditsData} />
                ))}
            {selectedSection === "TvShow" &&
                (isTvLoading ? (
                    <Loading />
                ) : isTvError || !tvCreditsData ? (
                    <div>TV 크레딧을 불러오는 중 오류가 발생했습니다.</div>
                ) : (
                    <TvCredits TvCreditsData={tvCreditsData} />
                ))}
        </S.Container>
    );
}
