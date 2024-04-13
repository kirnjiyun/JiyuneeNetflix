import * as S from "./movieSlider.styled";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import TVCard from "../MovieCard/MovieCard";
const TvSlider = ({ responsive, tvShows, responsive }) => {
    return (
        <S.CarouselContainer>
            <S.Title>📺 {title}</S.Title>
            <Carousel
                infinite={true}
                centerMode={true}
                containerClass="carousel-container"
                responsive={responsive}
                itemClass="carousel-item"
                autoPlay={true}
                autoPlaySpeed={3000}
            >
                {tvShows.map((tv, i) => (
                    <TVCard onClick={onClick} tv={tv} key={i} />
                ))}
            </Carousel>
        </S.CarouselContainer>
    );
};

export default MovieSlider;
