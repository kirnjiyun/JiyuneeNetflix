import { usePopularMoviesQuery } from "../../../../hooks/usePopularMovies";
import MovieSlider from "../../../../common/MovieSlider/MovieSlider";
import Loading from "../../../../common/Loading/Loading";
const PopularMovieSlide = ({ responsive, onClick }) => {
    const { data, isLoading, isError, error } = usePopularMoviesQuery();

    if (isLoading) {
        return <Loading />;
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
                onClick={onClick}
            />
        </div>
    );
};

export default PopularMovieSlide;
