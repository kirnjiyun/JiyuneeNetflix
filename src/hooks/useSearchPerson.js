import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchSearchPerson = async ({ keyword, page }) => {
    try {
        if (keyword) {
            const response = await api.get(
                `/search/person?query=${keyword}&page=${page}&include_adult=false`
            );
            return response;
        }
    } catch (error) {
        console.error("Error fetching people:", error);
        throw error;
    }
};

export const useSearchPersonQuery = ({ keyword, page }) => {
    return useQuery({
        queryKey: ["person-search", keyword, page],
        queryFn: () => fetchSearchPerson({ keyword, page }),
        enabled: !!keyword,
        select: (result) => result.data,
    });
};
