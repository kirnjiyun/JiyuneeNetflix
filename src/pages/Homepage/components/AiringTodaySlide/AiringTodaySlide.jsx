import React from "react";
import Loading from "../../../../common/Loading/Loading";
import TvSlider from "../../../../common/TvSlider/TvSlider";
import { useAiringTodayQuery } from "../../../../hooks/useAiringToday";
const AiringTodaySlide = ({ responsive }) => {
    const { data, isLoading, isError, error } = useAiringTodayQuery();

    if (isLoading) {
        return <Loading />;
    }

    if (isError) {
        return <div>{error.message}</div>;
    }

    return (
        <div>
            <TvSlider
                title="Airing Today"
                tvShows={data.results}
                responsive={responsive}
                // onClick={onClick}
            />
        </div>
    );
};

export default AiringTodaySlide;
