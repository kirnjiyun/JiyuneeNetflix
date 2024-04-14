import * as S from "./tvSlider.styled";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import TVCard from "../TVCard/TVCard";
const TvSlider = ({ responsive, tvShows, title }) => {
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
                    <TVCard tv={tv} key={i} />
                ))}
            </Carousel>
        </S.CarouselContainer>
    );
};

export default TvSlider;
