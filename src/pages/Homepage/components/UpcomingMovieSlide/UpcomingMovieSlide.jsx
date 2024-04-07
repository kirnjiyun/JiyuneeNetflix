import MovieSlider from "../../../../common/MovieSlider/MovieSlider";
import { useUpcomingMoviesQuery } from "../../../../hooks/useUpcomingMovies";
const UpcomingMovieSlide = ({ responsive }) => {
    const { data, isLoading, isError, error } = useUpcomingMoviesQuery();

    if (isLoading) {
        return <div>Loading..</div>;
    }

    if (isError) {
        return <div>{error.message}</div>;
    }

    return (
        <div>
            <MovieSlider
                title="Upcoming Movies"
                movies={data.results}
                responsive={responsive}
            />
        </div>
    );
};

export default UpcomingMovieSlide;
