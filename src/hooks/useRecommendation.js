// hooks/useRecommendation.js
import { useState } from "react";
import axios from "axios";

const useRecommendation = () => {
    const [isLoading, setIsLoading] = useState(false);

    const fetchRecommendations = async (input) => {
        if (!input.trim()) return null;

        setIsLoading(true);
        try {
            const response = await axios.post(
                "https://port-0-chatbot-for-yunflix-m8xzdxm4b14c7e2a.sel4.cloudtype.app/recommend",
                { message: input },
                {
                    headers: { "Content-Type": "application/json" },
                    timeout: 10000,
                }
            );

            const { intro, movies } = response.data;
            const titlesWithIds = movies
                .filter((movie) => movie.title && movie.title.trim())
                .slice(0, 3);

            return { intro, movies: titlesWithIds };
        } catch (error) {
            return {
                error: "추천을 가져오는 데 문제가 발생했습니다.",
                movies: [],
            };
        } finally {
            setIsLoading(false);
        }
    };

    return { fetchRecommendations, isLoading };
};

export default useRecommendation;
