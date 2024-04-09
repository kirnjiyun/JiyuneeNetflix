import MovieSlider from "../../../../common/MovieSlider/MovieSlider";

import { useTopRatedMoviesQuery } from "../../../../hooks/useTopRatedMovies";

const TopRatedMovieSlide = ({ responsive, onClick }) => {
    const { data, isLoading, isError, error } = useTopRatedMoviesQuery();

    if (isLoading) {
        return <div>Loading..</div>;
    }

    if (isError) {
        return <div>{error.message}</div>;
    }

    return (
        <div>
            <MovieSlider
                title="Top Rated Movies"
                movies={data.results}
                responsive={responsive}
                onClick={onClick}
            />
        </div>
    );
};

export default TopRatedMovieSlide;
