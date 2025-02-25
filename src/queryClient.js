import { QueryClient } from "react-query";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 300000,
            cacheTime: 600000,
            retry: 1,
        },
    },
});

export default queryClient;
