import React from "react";
import * as S from "./homepage.styled";
import Banner from "./components/Banner/Banner";
import PopularMovieSlide from "./components/PopularMovieSlide/PopularMovieSlide";
import TopRatedMovieSlide from "./components/TopRatedMovieSlide/TopRatedMovieSlide";
import UpcomingMovieSlide from "./components/UpcomingMovieSlide/UpcomingMovieSlide";
import responsive from "../../constants/responsive";
import { useNavigate } from "react-router-dom";

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
        </S.HomepageContainer>
    );
};

export default Homepage;
