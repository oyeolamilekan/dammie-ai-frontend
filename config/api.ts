import axios from "axios";
import { BASE_URL } from "./url";

const axiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: 10000
});

axiosInstance.interceptors.request.use(config => {
    if (config.data instanceof FormData) {
        config.headers['Content-Type'] = 'multipart/form-data';
    } else {
        config.headers['Content-Type'] = 'application/json';
    }
    return config;
});

axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    }
);

export { axiosInstance };
