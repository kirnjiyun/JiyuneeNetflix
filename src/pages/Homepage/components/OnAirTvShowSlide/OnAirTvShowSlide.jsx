import React from "react";
import { useTVontheAirQuery } from "../../../../hooks/useTVontheAir";
import Loading from "../../../../common/Loading/Loading";
import TvSlider from "../../../../common/TvSlider/TvSlider";

const OnAirTvShowSlide = ({ responsive, onClick }) => {
    const { data, isLoading, isError, error } = useTVontheAirQuery();

    console.log("tv", data);

    if (isLoading) {
        return <Loading />;
    }

    if (isError) {
        return <div>{error.message}</div>;
    }

    return (
        <div>
            <TvSlider
                title="On Air"
                tvShows={data.results}
                responsive={responsive}
                onClick={onClick}
            />
        </div>
    );
};

export default OnAirTvShowSlide;
