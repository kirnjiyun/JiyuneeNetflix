import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchApiMovies = async () => {
    const response = await api.get("/movie/top_rated");
    return response.data;
};

export const useTopRatedMoviesQuery = () => {
    return useQuery({
        queryKey: ["movie-top"],
        queryFn: fetchApiMovies,
    });
};
