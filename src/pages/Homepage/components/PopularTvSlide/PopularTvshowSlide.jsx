import React from "react";
import { usePopularTvQuery } from "../../../../hooks/usePopularTv";
import Loading from "../../../../common/Loading/Loading";
import TvSlider from "../../../../common/TvSlider/TvSlider";

const PopularTvshowSlide = ({ responsive }) => {
    const { data, isLoading, isError, error } = usePopularTvQuery();

    if (isLoading) {
        return <Loading />;
    }

    if (isError) {
        return <div>{error.message}</div>;
    }

    return (
        <div>
            <TvSlider
                title="Popular"
                tvShows={data.results}
                responsive={responsive}
                // onClick={onClick}
            />
        </div>
    );
};

export default PopularTvshowSlide;
