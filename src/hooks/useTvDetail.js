import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchTvDetail = async (tvId) => {
    const response = await api.get(`/tv/${tvId}`);
    return response.data;
};

export const useTvDetailQuery = (tvId) => {
    return useQuery({
        queryKey: ["tv-detail", tvId],
        queryFn: () => fetchTvDetail(tvId),
        enabled: !!tvId,
    });
};

const fetchTvDetailCasts = async (tvId) => {
    const response = await api.get(`/tv/${tvId}/credits`);
    return response.data;
};
export const useTvDetailCastsQuery = (tvId) => {
    return useQuery({
        queryKey: ["tv-detail-casts", tvId],
        queryFn: () => fetchTvDetailCasts(tvId),
        enabled: !!tvId,
    });
};
