import * as S from "./movieSlider.styled";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import MovieCard from "../MovieCard/MovieCard";
const MovieSlider = ({ title, movies, responsive, onClick }) => {
    return (
        <S.CarouselContainer>
            <S.Title>🍿{title}🥤</S.Title>
            <Carousel
                infinite={true}
                centerMode={true}
                containerClass="carousel-container"
                responsive={responsive}
                itemClass="carousel-item"
                autoPlay={true}
                autoPlaySpeed={3000}
            >
                {movies.map((movie, i) => (
                    <MovieCard onClick={onClick} movie={movie} key={i} />
                ))}
            </Carousel>
        </S.CarouselContainer>
    );
};

export default MovieSlider;
