import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchApiPopularTv = async () => {
    const response = await api.get("/tv/popular");
    return response.data;
};

export const usePopularTvQuery = () => {
    return useQuery({
        queryKey: ["tv-Popular"],
        queryFn: fetchApiPopularTv,
    });
};
