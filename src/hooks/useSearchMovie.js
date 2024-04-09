import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchSearchMovie = async ({ keyword, page }) => {
    try {
        if (keyword) {
            const response = await api.get(
                `/search/movie?query=${keyword}&page=${page}`
            );
            return response;
        } else {
            const response = await api.get(`/movie/popular?page=${page}`);
            return response;
        }
    } catch (error) {
        console.error("Error fetching movies:", error);
        throw error;
    }
};

export const useSearchMovieQuery = ({ keyword, page }) => {
    return useQuery({
        queryKey: ["movie-search", keyword, page],
        queryFn: () => fetchSearchMovie({ keyword, page }),
        select: (result) => result.data,
    });
};
