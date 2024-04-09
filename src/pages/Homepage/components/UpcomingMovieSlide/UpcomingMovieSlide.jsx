import MovieSlider from "../../../../common/MovieSlider/MovieSlider";
import { useUpcomingMoviesQuery } from "../../../../hooks/useUpcomingMovies";
const UpcomingMovieSlide = ({ responsive, onClick }) => {
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
                onClick={onClick}
            />
        </div>
    );
};

export default UpcomingMovieSlide;
