import { Axios, AxiosRequestConfig } from 'axios';
import { GetSessionProps } from 'core/services/storage';

interface PropsRetryRequest extends GetSessionProps {
  axios: Axios;
}

export function authorization({ axios, getSession }: PropsRetryRequest) {
  axios.interceptors.request.use((config: AxiosRequestConfig) => {
    const token = getSession();
    if (!token) return config;
    if (config?.headers) {
      config.headers = { Authorization: `Bearer ${token}` };
    }
    return config;
  });
  return axios;
}
