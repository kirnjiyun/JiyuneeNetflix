import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchApiAiringToday = async () => {
    const response = await api.get("/tv/airing_today");
    return response.data;
};

export const useAiringTodayQuery = () => {
    return useQuery({
        queryKey: ["tv-today"],
        queryFn: fetchApiAiringToday,
    });
};
