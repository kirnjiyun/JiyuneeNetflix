import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchApiMovies = async () => {
    const response = await api.get("/movie/popular");
    return response.data;
};

export const usePopularMoviesQuery = () => {
    return useQuery({
        queryKey: ["movie-popular"],
        queryFn: fetchApiMovies,
    });
};
