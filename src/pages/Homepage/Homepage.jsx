import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./homepage.styled";
import responsive from "../../constants/responsive";
import Banner from "./components/Banner/Banner";

import PopularMovieSlide from "./components/PopularMovieSlide/PopularMovieSlide";
import TopRatedMovieSlide from "./components/TopRatedMovieSlide/TopRatedMovieSlide";
import UpcomingMovieSlide from "./components/UpcomingMovieSlide/UpcomingMovieSlide";
import OnAirTvShowSlide from "./components/OnAirTvShowSlide/OnAirTvShowSlide";
import PopularTvSlide from "./components/PopularTvSlide/PopularTvshowSlide";
import AiringTodaySlide from "./components/AiringTodaySlide/AiringTodaySlide";
import TopRatedTvSlide from "./components/TopRatedTvSlide/TopRatedTvSlide";

const Homepage = () => {
    const navigate = useNavigate();

    const handleMClick = (movie) => {
        navigate(`/movies/${movie.id}`);
    };
    const handleTvClick = (tv) => {
        navigate(`/tv/${tv.id}`);
    };

    return (
        <S.HomepageContainer>
            <Banner />
            <PopularMovieSlide responsive={responsive} onClick={handleMClick} />
            <TopRatedMovieSlide
                responsive={responsive}
                onClick={handleMClick}
            />
            <UpcomingMovieSlide
                responsive={responsive}
                onClick={handleMClick}
            />
            <AiringTodaySlide responsive={responsive} onClick={handleTvClick} />
            <OnAirTvShowSlide responsive={responsive} onClick={handleTvClick} />
            <PopularTvSlide responsive={responsive} onClick={handleTvClick} />
            <TopRatedTvSlide responsive={responsive} onClick={handleTvClick} />
        </S.HomepageContainer>
    );
};

export default Homepage;
