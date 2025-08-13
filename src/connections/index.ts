import axios from 'axios';
import { MODE } from '@/lib/consts/variables';

const PROD_URL = import.meta.env.VITE_PROD_URL;
const DEV_URL = import.meta.env.VITE_DEV_URL;

export const BASE_URL = MODE === "production" ? PROD_URL : DEV_URL;

const api = axios.create({
  baseURL: BASE_URL,
});

api.interceptors.request.use(
  (config) => {
    // TODO: Configurar authorization Header
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
)


export default api;
