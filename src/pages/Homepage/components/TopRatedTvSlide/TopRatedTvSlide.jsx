import React from "react";
import { useTopRatedTvQuery } from "../../../../hooks/useTopRatedTv";
import Loading from "../../../../common/Loading/Loading";
import TvSlider from "../../../../common/TvSlider/TvSlider";

const TopRatedTvSlide = ({ responsive, onClick }) => {
    const { data, isLoading, isError, error } = useTopRatedTvQuery();

    if (isLoading) {
        return <Loading />;
    }

    if (isError) {
        return <div>{error.message}</div>;
    }

    return (
        <div>
            <TvSlider
                title="Top Rated"
                tvShows={data.results}
                responsive={responsive}
                onClick={onClick}
            />
        </div>
    );
};

export default TopRatedTvSlide;
