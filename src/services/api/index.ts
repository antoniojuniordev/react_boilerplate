import http from './http';

import {
  dispatchUpdate,
  dispatchError,
} from 'services/api/helpers/handlerResponses';
import { interceptPromise } from 'services/api/helpers/handlerPromisses';

export default {
  async get(url: string, reference = '') {
    try {
      const { data } = await interceptPromise(http.get(url), reference);
      return data;
    } catch (err: any) {
      dispatchError(err.response);
    }
  },
  async create(url: string, send: object, msg: string, reference = '') {
    try {
      const resp = await interceptPromise(http.post(url, send), reference);
      if (msg) dispatchUpdate(msg);
      console.log(11);
      return resp.data || true;
    } catch (err: any) {
      dispatchError(err.response);
      return false;
    }
  },
  async update(url: string, send: object, msg: string, reference = '') {
    try {
      const resp = await interceptPromise(http.put(url, send), reference);
      dispatchUpdate(msg);
      return resp.data || true;
    } catch (err: any) {
      dispatchError(err.response);
      return false;
    }
  },
  async delete(url: string, msg: string, reference = '') {
    try {
      await interceptPromise(http.delete(url), reference);
      dispatchUpdate(msg);
      return true;
    } catch (err: any) {
      dispatchError(err.response);
    }
  },
  async listAll(url: string) {
    try {
      const response: any = interceptPromise(await http.get(url));
      return response?.data;
    } catch (err: any) {
      dispatchError(err.response);
    }
  },
  async listAllPaginate(url: string, { page = 1, limit = 10, filter = '' }) {
    try {
      const { data } = await interceptPromise(
        http.get(`${url}?page=${page}&limit=${limit}${filter}`)
      );
      return data;
    } catch (err: any) {
      dispatchError(err.response);
    }
  },
  async listAllFilter(url: string, { valueQuery = '' }, reference = '') {
    try {
      let params =
        valueQuery && !valueQuery.includes('page')
          ? `${valueQuery}&page=1`
          : valueQuery;
      params =
        valueQuery && !valueQuery.includes('limit')
          ? `${valueQuery}&limit=1`
          : valueQuery;
      const { data } = await interceptPromise(
        http.get(`${url}/?${params}`),
        reference
      );
      return data;
    } catch (err: any) {
      dispatchError(err.response);
    }
  },
  async listOne(url: string, id: string, reference = '') {
    try {
      const { data } = await interceptPromise(
        http.get(`${url}/${id}`),
        reference
      );
      return data;
    } catch (err: any) {
      dispatchError(err.response);
    }
  },
};
