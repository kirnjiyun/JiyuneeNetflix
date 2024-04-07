import React from "react";
import * as S from "./homepage.styled";
import Banner from "./components/Banner/Banner";
import PopularMovieSlide from "./components/PopularMovieSlide/PopularMovieSlide";
import TopRatedMovieSlide from "./components/TopRatedMovieSlide/TopRatedMovieSlide";
import UpcomingMovieSlide from "./components/UpcomingMovieSlide/UpcomingMovieSlide";
import responsive from "../../constants/responsive";
const Homepage = () => {
    return (
        <S.HomepageContainer>
            <Banner />
            <PopularMovieSlide responsive={responsive} />
            <TopRatedMovieSlide responsive={responsive} />
            <UpcomingMovieSlide responsive={responsive} />
        </S.HomepageContainer>
    );
};

export default Homepage;
