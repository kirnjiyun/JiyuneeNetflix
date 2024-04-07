// import styled from "styled-components";

// export const CarouselContainer = styled.div`
//     .movie-slider {
//         transition: transform 0.5s;
//     }
//     .carousel-container {
//         overflow: hidden;
//         &:hover {
//             overflow: visible;
//             z-index: 100;
//         }
//     }
// `;
import styled from "styled-components";

export const CarouselContainer = styled.div`
    .carousel {
        transition: transform 0.5s;
    }

    .carousel-container {
        overflow: visible;
    }

    .carousel-item:hover {
        z-index: 100;
    }
`;
