import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchApiTVonAir = async () => {
    const response = await api.get("/tv/on_the_air");
    return response.data;
};

export const useTVontheAirQuery = () => {
    return useQuery({
        queryKey: ["tv-onAir"],
        queryFn: fetchApiTVonAir,
    });
};
