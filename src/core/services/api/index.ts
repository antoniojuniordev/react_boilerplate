// import notification from 'core/services/notification';

import { handlePromise, dispatchError, PropsResponseError } from './handlers';
import http from './http';

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
  async post(url: string, send: object, msg: string, reference = '') {
    try {
      const resp = await handlePromise(http.post(url, send), reference);
      // if (msg) notification.success(msg);
      return resp;
    } catch (err) {
      dispatchError((err as PropsResponseError).response);
      return false;
    }
  },
  async put(url: string, send: object, msg: string, reference = '') {
    try {
      const resp = await handlePromise(http.put(url, send), reference);
      // if (msg) notification.success(msg);
      return resp;
    } catch (err) {
      dispatchError((err as PropsResponseError).response);
      return false;
    }
  },
  async delete(url: string, msg: string, reference = '') {
    try {
      await handlePromise(http.delete(url), reference);
      // if (msg) notification.success(msg);
      return true;
    } catch (err) {
      dispatchError((err as PropsResponseError).response);
      return false;
    }
  },
};
