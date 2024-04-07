import React from "react";
import { usePopularMoviesQuery } from "../../../../hooks/usePopularMovies";

import MovieSlider from "../../../../common/MovieSlider/MovieSlider";
import responsive from "../../../../constants/responsive";

const PopularMovieSlide = () => {
    const { data, isLoading, isError, error } = usePopularMoviesQuery();

    if (isLoading) {
        return <div>Loading... loadingspinner 추가해야됨</div>;
    }

    if (isError) {
        return <div>{error.message}</div>;
    }

    return (
        <div>
            <MovieSlider
                title="Popular Movies"
                movies={data.results}
                responsive={responsive}
            />
        </div>
    );
};

export default PopularMovieSlide;
