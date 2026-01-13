import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

/* Request Interceptor */
api.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error),
);

/* Response Interceptor */
api.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error),
);

export default api;
