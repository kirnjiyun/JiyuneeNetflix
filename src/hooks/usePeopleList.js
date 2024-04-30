import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchPersonPopularList = async () => {
    const response = await api.get("/person/popular");
    return response.data;
};

export const usePopularPeopleQuery = () => {
    return useQuery({
        queryKey: ["Person-Popular"],
        queryFn: fetchPersonPopularList,
    });
};
