import { useCallback } from 'react';
import { AxiosRequestConfig } from 'axios';

import http from 'core/services/api/http';
import services from 'core/services/api';

const useAxiosInterceptors = () => {
  // const { token, signOutUser } = useSession();

  const token = '';

  async function refreshToken() {
    try {
      const response = await services.get('/refresh');
      console.log('response', response);
      if (!response) {
        // signOutUser();
      }
      return response;
    } catch (error) {
      // signOutUser();
      return false;
    }
  }

  const startInterceptor = useCallback(() => {
    http.interceptors.request.use((config: AxiosRequestConfig) => {
      if (config?.headers && token) {
        config.headers = { Authorization: `Bearer ${token}` };
      }
      return config;
    });
    http.interceptors.response.use(
      (value) => {
        return Promise.resolve(value);
      },
      async (error) => {
        const { isAxiosError = false, response = null, config } = error;

        if (
          error.response.status === 401 &&
          token &&
          !config?.url?.includes('refresh')
        ) {
          const response = await refreshToken();
          return response;
        }

        if (isAxiosError && response && response.status === 401) {
          // signOutUser();
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
  }, [token]);

  return {
    startInterceptor,
    refreshToken,
  };
};

export default useAxiosInterceptors;
