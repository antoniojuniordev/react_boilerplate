import notification from 'services/notification';

import { interceptPromise } from './handlerPromise';
import { dispatchError } from './handlerError';
import http from './http';

export default {
  async get(url: string, reference = '') {
    try {
      const resp = await interceptPromise(http.get(url), reference);
      return resp;
    } catch (err: any) {
      dispatchError(err.response);
      return false;
    }
  },
  async post(url: string, send: object, msg: string, reference = '') {
    try {
      const resp = await interceptPromise(http.post(url, send), reference);
      if (msg) notification.success(msg);
      return resp;
    } catch (err: any) {
      dispatchError(err.response);
      return false;
    }
  },
  async put(url: string, send: object, msg: string, reference = '') {
    try {
      const resp = await interceptPromise(http.put(url, send), reference);
      if (msg) notification.success(msg);
      return resp;
    } catch (err: any) {
      dispatchError(err.response);
      return false;
    }
  },
  async delete(url: string, msg: string, reference = '') {
    try {
      await interceptPromise(http.delete(url), reference);
      if (msg) notification.success(msg);
      return true;
    } catch (err: any) {
      dispatchError(err.response);
      return false;
    }
  },
};
