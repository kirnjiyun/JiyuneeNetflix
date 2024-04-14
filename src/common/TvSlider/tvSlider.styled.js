import styled from "styled-components";

export const CarouselContainer = styled.div`
    .carousel {
        transition: transform 0.5s;
    }

    .carousel-container {
        overflow: hidden;
    }
    .carousel-item {
        margin: 0 15px;
    }
    .carousel-item:hover {
        z-index: 100;
    }
`;
export const Title = styled.h2`
    padding: 15px;
`;
