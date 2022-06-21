import notification from 'core/services/notification';

import { handlePromise } from './handlerPromise';
import { dispatchError, PropsResponseError } from './handlerError';
import http from './http';
// import { serializeObjectToParams } from 'core/utils';

export default {
  async get(url: string, reference = '') {
    try {
      const resp = (await handlePromise(http.get(url), reference)) as {
        data: object;
      };
      return resp.data;
    } catch (err) {
      dispatchError((err as PropsResponseError).response);
      return false;
    }
  },
  // async getWithFilter(url: string, query: object, reference = '') {
  //   try {
  //     const page = query['currentPage' as keyof typeof query] || 1;
  //     const limit = query['limit' as keyof typeof query] || 10;

  //     const params = serializeObjectToParams({ ...query, limit, page });
  //     const response = await this.get(`${url}?${params}`, reference);
  //     return response;
  //   } catch (err) {
  //     dispatchError((err as PropsResponseError).response);
  //     return false;
  //   }
  // },
  async post(url: string, send: object, msg: string, reference = '') {
    try {
      const resp = await handlePromise(http.post(url, send), reference);
      if (msg) notification.success(msg);
      return resp;
    } catch (err) {
      dispatchError((err as PropsResponseError).response);
      return false;
    }
  },
  async put(url: string, send: object, msg: string, reference = '') {
    try {
      const resp = await handlePromise(http.put(url, send), reference);
      if (msg) notification.success(msg);
      return resp;
    } catch (err) {
      dispatchError((err as PropsResponseError).response);
      return false;
    }
  },
  async delete(url: string, msg: string, reference = '') {
    try {
      await handlePromise(http.delete(url), reference);
      if (msg) notification.success(msg);
      return true;
    } catch (err) {
      dispatchError((err as PropsResponseError).response);
      return false;
    }
  },
};
