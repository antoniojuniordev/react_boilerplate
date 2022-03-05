import Axios, { AxiosRequestConfig } from 'axios';
import { destroySession, getSession } from 'services/storage';

const http = Axios.create({
  baseURL: process.env.REACT_APP_URL,
});

http.interceptors.request.use((config: AxiosRequestConfig) => {
  const token = getSession();
  if (!token) return config;
  if (config?.headers) {
    config.headers = { Authorization: `Bearer ${token}` };
  }
  return config;
});

http.interceptors.response.use(
  (value) => {
    return Promise.resolve(value);
  },
  (error) => {
    const { isAxiosError = false, response = null } = error;

    if (isAxiosError && response && response.status === 401) {
      destroySession();
      return Promise.reject(error);
    }
    return Promise.reject(error);
  }
);

export default http;
