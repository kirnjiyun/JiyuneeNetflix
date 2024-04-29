import React from "react";
import * as S from "./tvDetailpage.styled";
import { useTvDetailQuery } from "../../hooks/useTvDetail";
import { useTvDetailCastsQuery } from "../../hooks/useTvDetail";
import { useParams } from "react-router-dom";
import Loading from "../../common/Loading/Loading";

const TvDetailPage = () => {
    const { id } = useParams();
    const { data, isLoading, isError } = useTvDetailQuery(id);
    const { data: CreditsData } = useTvDetailCastsQuery(id);

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
                />

                <S.TvDetails>
                    <S.Title>{data?.name}</S.Title>
                    {/* <S.GenreList>
                        {data?.genres.map((genre) => (
                            <S.Genre key={genre.id}>{genre.name}</S.Genre>
                        ))}
                    </S.GenreList> */}
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
            {/* <S.TitleContainer>
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
            <TvModal
                show={showModal}
                onHide={handleModalClose}
                title={data?.name}
                videosData={videosData}
                onClick={handleModalClick}
            /> */}
        </S.TvDetailContainer>
    );
};

export default TvDetailPage;
