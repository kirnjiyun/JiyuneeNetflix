import React from "react";
import { usePopularMoviesQuery } from "../../../../hooks/usePopularMovies";
// import * as S from "./banner.styled";

const Banner = () => {
    const { data, isLoading, isError } = usePopularMoviesQuery();
    console.log("data", data);
    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error occurred while fetching data.</div>;
    }
};
export default Banner;
