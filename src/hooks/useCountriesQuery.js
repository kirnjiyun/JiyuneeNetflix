import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchCountries = async () => {
    const response = await api.get("/configuration/countries");
    return response.data;
};

export const useCountriesQuery = () => {
    return useQuery({
        queryKey: ["countries"],
        queryFn: fetchCountries,
    });
};
