import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchSearchMulti = async ({ keyword, page }) => {
    try {
        if (keyword) {
            const response = await api.get(
                `/search/multi?query=${keyword}&page=${page}`
            );
            return response;
        }
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
};

export const useSearchMultiQuery = ({ keyword, page }) => {
    const query = useQuery({
        queryKey: ["multi-search", keyword, page],
        queryFn: () => fetchSearchMulti({ keyword, page }),
        select: (result) => result.data,
    });

    console.log(query.data);

    return query;
};
