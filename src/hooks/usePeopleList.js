import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchPersonPopularList = async ({ page }) => {
    const response = await api.get(`/person/popular?page=${page}`);
    return response.data;
};

export const usePopularPeopleQuery = (page) => {
    return useQuery({
        queryKey: ["Person-Popular", page],
        queryFn: () => fetchPersonPopularList({ page }),
    });
};
