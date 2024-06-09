import { useQuery } from "react-query";
import axios from "../axios";
import { ProfileResponse } from "./types";

export const useNextProfile = () => {
    return useQuery({
        queryKey: "getNextProfile",
        queryFn: async () => {
            const response = await axios.get<ProfileResponse>("/matching/next");
            return response.data.data;
        },
    });
}