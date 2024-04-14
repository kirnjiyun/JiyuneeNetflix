import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchApiTopTv = async () => {
    const response = await api.get("/tv/top_rated");
    return response.data;
};

export const useTopRatedTvQuery = () => {
    return useQuery({
        queryKey: ["tv-top"],
        queryFn: fetchApiTopTv,
    });
};
