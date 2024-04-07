import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchApiMovies = async () => {
    const response = await api.get("/movie/upcoming");
    return response.data;
};

export const useUpcomingMoviesQuery = () => {
    return useQuery({
        queryKey: ["movie-upcoming"],
        queryFn: fetchApiMovies,
    });
};
