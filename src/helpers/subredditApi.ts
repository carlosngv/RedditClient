import axios from "axios";
import { getEnvVariables } from "./getEnvVariables";

const { VITE_API_URL } = getEnvVariables();

export const subredditApi = axios.create({
    baseURL: VITE_API_URL,
});

export default subredditApi;
