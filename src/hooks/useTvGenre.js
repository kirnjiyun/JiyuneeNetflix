import api from "../utils/api";
import { useQuery } from "@tanstack/react-query";
export const useTvGenreQuery = () => {
    const fetchTvGenre = () => {
        return api.get(`/genre/tv/list`);
    };

    return useQuery({
        queryKey: ["tv-genre"],
        queryFn: fetchTvGenre,
        select: (result) => result.data.genres,
        staleTime: 300000,
    });
};
