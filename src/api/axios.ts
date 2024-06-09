import axios from "axios";
import { API_URL } from "../App";

const axiosInstance = axios;

axiosInstance.defaults.baseURL = import.meta.env.VITE_API_URL || API_URL;

type AuthorizationScheme = 'Bearer' | 'TMA';

export const setUserData = (userData: string): void => {
    axiosInstance.defaults.headers.common["user-data"] = userData;
};

export const setToken = (scheme: AuthorizationScheme, token: string) => {
    axiosInstance.defaults.headers.common["Authorization"] = `${scheme} ${token}`;
};

export default axiosInstance;