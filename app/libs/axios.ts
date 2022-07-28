import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: process.env.REST_API_URL,
  timeout: 3000,
});
