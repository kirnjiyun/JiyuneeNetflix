import React from "react";
import * as S from "./homepage.styled";
import Banner from "./components/Banner/Banner";
import PopularMovieSlide from "./components/PopularMovieSlide/PopularMovieSlide";
import TopRatedMovieSlide from "./components/TopRatedMovieSlide/TopRatedMovieSlide";
import UpcomingMovieSlide from "./components/UpcomingMovieSlide/UpcomingMovieSlide";
const Homepage = () => {
    return (
        <S.HomepageContainer>
            <Banner />
            <PopularMovieSlide />
            <TopRatedMovieSlide />
            <UpcomingMovieSlide />
        </S.HomepageContainer>
    );
};

export default Homepage;
