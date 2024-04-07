import styled from "styled-components";

export const CarouselContainer = styled.div`
    .movie-slider {
        transition: transform 0.5s;
    }
    .carousel-container {
        overflow: hidden;
        &:hover {
            overflow: visible;
        }
    }
`;
