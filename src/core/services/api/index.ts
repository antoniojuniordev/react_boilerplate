import notification from 'core/services/notification';

import { interceptPromise } from './handlerPromise';
import { dispatchError, PropsResponseError } from './handlerError';
import http from './http';

async function refreshToken() {
  const value = Number(localStorage.getItem('expired'));
  if (value && new Date(value) < new Date()) {
    const result = await http.get('/refresh');
    localStorage.setItem('token', result.data.token);
    localStorage.setItem(
      'expired',
      String(new Date().setSeconds(result.data.expired))
    );
  }
}

function serializeObjectToParams(obj: object) {
  return Object.keys(obj).reduce((acc, key) => {
    if (acc) return `${acc}&${key}=${obj[key as keyof typeof obj]}`;
    return `${key}=${obj[key as keyof typeof obj]}`;
  }, '');
}

export default {
  async get(url: string, reference = '') {
    try {
      await refreshToken();
      const resp = await interceptPromise(http.get(url), reference);
      return resp;
    } catch (err) {
      dispatchError((err as PropsResponseError).response);
      return false;
    }
  },
  async getWithFilter(url: string, query: object, reference = '') {
    try {
      const page = query['page' as keyof typeof query] || 1;
      const limit = query['limit' as keyof typeof query] || 10;

      const params = serializeObjectToParams({ ...query, limit, page });
      const response = (await this.get(`${url}?${params}`, reference)) as {
        data: object;
      };
      return response.data;
    } catch (err) {
      dispatchError((err as PropsResponseError).response);
      return false;
    }
  },
  async post(url: string, send: object, msg: string, reference = '') {
    try {
      await refreshToken();
      const resp = await interceptPromise(http.post(url, send), reference);
      if (msg) notification.success(msg);
      return resp;
    } catch (err) {
      dispatchError((err as PropsResponseError).response);
      return false;
    }
  },
  async put(url: string, send: object, msg: string, reference = '') {
    try {
      await refreshToken();
      const resp = await interceptPromise(http.put(url, send), reference);
      if (msg) notification.success(msg);
      return resp;
    } catch (err) {
      dispatchError((err as PropsResponseError).response);
      return false;
    }
  },
  async delete(url: string, msg: string, reference = '') {
    try {
      await refreshToken();
      await interceptPromise(http.delete(url), reference);
      if (msg) notification.success(msg);
      return true;
    } catch (err) {
      dispatchError((err as PropsResponseError).response);
      return false;
    }
  },
};
