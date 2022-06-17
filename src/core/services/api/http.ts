import Axios, { AxiosRequestConfig } from 'axios';
import { destroySession, getSession } from 'core/services/storage';

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

let counter = 1;

http.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status >= 500 && counter < 3) {
      counter++;
      return http.request(error.config);
    }
    counter = 1;
    return Promise.reject(error);
  }
);

export default http;
