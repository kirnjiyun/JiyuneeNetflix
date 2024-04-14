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

    const handleClick = (movie) => {
        navigate(`/movies/${movie.id}`);
    };

    return (
        <S.HomepageContainer>
            <Banner />
            <PopularMovieSlide responsive={responsive} onClick={handleClick} />
            <TopRatedMovieSlide responsive={responsive} onClick={handleClick} />
            <UpcomingMovieSlide responsive={responsive} onClick={handleClick} />
            <AiringTodaySlide responsive={responsive} />
            <OnAirTvShowSlide responsive={responsive} />
            <PopularTvSlide responsive={responsive} />
            <TopRatedTvSlide responsive={responsive} />
        </S.HomepageContainer>
    );
};

export default Homepage;
