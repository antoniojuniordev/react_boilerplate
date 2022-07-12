import { Axios } from 'axios';
import { DestroySessionProps } from 'core/services/storage';

interface PropsRetryRequest extends DestroySessionProps {
  axios: Axios;
}

export function redirectSession({ axios, destroySession }: PropsRetryRequest) {
  axios.interceptors.response.use(
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

  return axios;
}
