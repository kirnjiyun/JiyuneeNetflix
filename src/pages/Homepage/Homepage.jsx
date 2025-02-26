import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./homepage.styled";
import { useQueryClient } from "@tanstack/react-query";
import responsive from "../../constants/responsive";
import Banner from "./components/Banner/Banner";
import ChatBot from "../../common/chatBot/ChatBot";
import PopularMovieSlide from "./components/PopularMovieSlide/PopularMovieSlide";
import TopRatedMovieSlide from "./components/TopRatedMovieSlide/TopRatedMovieSlide";
import UpcomingMovieSlide from "./components/UpcomingMovieSlide/UpcomingMovieSlide";
import TvTabs from "../../common/TvTab/TvTab";
import { useAiringTodayQuery } from "../../hooks/useAiringToday";
import { useTVontheAirQuery } from "../../hooks/useTVontheAir";
import { usePopularTvQuery } from "../../hooks/usePopularTv";
import { useTopRatedTvQuery } from "../../hooks/useTopRatedTv";

const Homepage = () => {
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const { data: airingTodayData, isLoading: airingLoading } =
        useAiringTodayQuery();
    const { data: onAirData, isLoading: onAirLoading } = useTVontheAirQuery();
    const { data: popularTvData, isLoading: popularLoading } =
        usePopularTvQuery();
    const { data: topRatedTvData, isLoading: topRatedLoading } =
        useTopRatedTvQuery();

    const tvCategories = [
        { title: "오늘 방송", tvShows: airingTodayData?.results || [] },
        { title: "방송 중인 TV 쇼", tvShows: onAirData?.results || [] },
        { title: "인기 TV 쇼", tvShows: popularTvData?.results || [] },
        { title: "최고 평점 TV 쇼", tvShows: topRatedTvData?.results || [] },
    ];
    useEffect(() => {
        queryClient.invalidateQueries(["tv-today"]);
        queryClient.invalidateQueries(["tv-on-air"]);
        queryClient.invalidateQueries(["tv-popular"]);
        queryClient.invalidateQueries(["tv-top-rated"]);
    }, [queryClient]); // 로딩 상태 통합
    const isTvLoading =
        airingLoading || onAirLoading || popularLoading || topRatedLoading;

    const handleMClick = (movie) => {
        navigate(`/movie/${movie.id}`);
    };
    const handleTvClick = (tv) => {
        navigate(`/tv/${tv.id}`);
    };
    return (
        <>
            <S.HomepageContainer>
                <Banner />
                <PopularMovieSlide
                    responsive={responsive}
                    onClick={handleMClick}
                />
                <UpcomingMovieSlide
                    responsive={responsive}
                    onClick={handleMClick}
                />
                <TopRatedMovieSlide
                    responsive={responsive}
                    onClick={handleMClick}
                />
                {isTvLoading ? (
                    <S.Loading>Loading TV Shows...</S.Loading>
                ) : tvCategories ? (
                    <TvTabs categories={tvCategories} onClick={handleTvClick} />
                ) : (
                    <p>TV 데이터를 불러오지 못했습니다.</p>
                )}
            </S.HomepageContainer>
            <ChatBot />
        </>
    );
};

export default Homepage;
