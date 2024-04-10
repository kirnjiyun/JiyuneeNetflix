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
