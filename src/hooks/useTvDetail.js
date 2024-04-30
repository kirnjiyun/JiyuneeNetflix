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

const fetchtvRecommend = async (tvId) => {
    const response = await api.get(`/tv/${tvId}/recommendations`);
    return response.data;
};

export const useTvRecommendQuery = (tvId) => {
    return useQuery({
        queryKey: ["tv-recommend", tvId],
        queryFn: () => fetchtvRecommend(tvId),
        enabled: !!tvId,
    });
};

const fetchTvVideos = async (tvId) => {
    const response = await api.get(`/tv/${tvId}/videos`);
    return response.data;
};

export const useTvVideosQuery = (tvId) => {
    return useQuery({
        queryKey: ["Tv-videos", tvId],
        queryFn: () => fetchTvVideos(tvId),
        enabled: !!tvId,
    });
};
const fetchTvDetailReviews = async (tvId) => {
    const response = await api.get(`/tv/${tvId}/reviews`);
    return response.data;
};
export const useTvDetailReviewsQuery = (tvId) => {
    return useQuery({
        queryKey: ["Tv-detail-reviews", tvId],
        queryFn: () => fetchTvDetailReviews(tvId),
        enabled: !!tvId,
    });
};
