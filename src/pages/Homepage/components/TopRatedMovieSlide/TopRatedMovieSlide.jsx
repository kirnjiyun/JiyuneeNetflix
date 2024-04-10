import MovieSlider from "../../../../common/MovieSlider/MovieSlider";
import { useTopRatedMoviesQuery } from "../../../../hooks/useTopRatedMovies";
import Loading from "../../../../common/Loading/Loading";
const TopRatedMovieSlide = ({ responsive, onClick }) => {
    const { data, isLoading, isError, error } = useTopRatedMoviesQuery();

    if (isLoading) {
        return <Loading />;
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
