import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchMovieDetail = async (movieId) => {
    const response = await api.get(`/movie/${movieId}`);
    return response.data;
};

export const useMovieDetailQuery = (movieId) => {
    return useQuery({
        queryKey: ["movie-detail", movieId],
        queryFn: () => fetchMovieDetail(movieId),
        enabled: !!movieId,
    });
};
const fetchMovieDetailReviews = async (movieId) => {
    const response = await api.get(`/movie/${movieId}/reviews`);
    return response.data;
};
export const useMovieDetailReviewsQuery = (movieId) => {
    return useQuery({
        queryKey: ["movie-detail-reviews", movieId],
        queryFn: () => fetchMovieDetailReviews(movieId),
        enabled: !!movieId,
    });
};

const fetchMovieDetailCasts = async (movieId) => {
    const response = await api.get(`/movie/${movieId}/credits`);
    return response.data;
};
export const useMovieDetailCastsQuery = (movieId) => {
    return useQuery({
        queryKey: ["movie-detail-casts", movieId],
        queryFn: () => fetchMovieDetailCasts(movieId),
        enabled: !!movieId,
    });
};

const fetchMovieRecommend = async (movieId) => {
    const response = await api.get(`/movie/${movieId}/recommendations`);
    return response.data;
};

export const useMovieRecommendQuery = (movieId) => {
    return useQuery({
        queryKey: ["movie-recommend", movieId],
        queryFn: () => fetchMovieRecommend(movieId),
        enabled: !!movieId,
    });
};
const fetchMovieVideos = async (movieId) => {
    const response = await api.get(`/movie/${movieId}/videos`);
    return response.data;
};

export const useMovieVideosQuery = (movieId) => {
    return useQuery({
        queryKey: ["movie-videos", movieId],
        queryFn: () => fetchMovieVideos(movieId),
        enabled: !!movieId,
    });
};
