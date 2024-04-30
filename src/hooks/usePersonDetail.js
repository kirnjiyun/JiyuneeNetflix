import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchPersonDetail = async (personId) => {
    const response = await api.get(`/person/${personId}`);
    return response.data;
};

export const usePersonDetailQuery = (personId) => {
    return useQuery({
        queryKey: ["person-detail", personId],
        queryFn: () => fetchPersonDetail(personId),
    });
};

const fetchPersonMovie = async (personId) => {
    const response = await api.get(`/person/${personId}/movie_credits`);
    return response.data;
};

export const usePersonMovieQuery = (personId) => {
    return useQuery({
        queryKey: ["person-MVcredits", personId],
        queryFn: () => fetchPersonMovie(personId),
    });
};
const fetchPersonTv = async (personId) => {
    const response = await api.get(`/person/${personId}/tv_credits`);
    return response.data;
};

export const usePersonTvQuery = (personId) => {
    return useQuery({
        queryKey: ["person-TVcredits", personId],
        queryFn: () => fetchPersonTv(personId),
    });
};
