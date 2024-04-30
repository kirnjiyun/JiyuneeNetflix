import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchSearchTV = async ({ keyword, page }) => {
    try {
        if (keyword) {
            const response = await api.get(
                `/search/tv?query=${keyword}&page=${page}`
            );
            return response;
        } else {
            const response = await api.get(`/tv/popular?page=${page}`);
            return response;
        }
    } catch (error) {
        console.error("Error fetching TV shows:", error);
        throw error;
    }
};

export const useSearchTVQuery = ({ keyword, page }) => {
    return useQuery({
        queryKey: ["tv-search", keyword, page],
        queryFn: () => fetchSearchTV({ keyword, page }),
        select: (result) => result.data,
    });
};
