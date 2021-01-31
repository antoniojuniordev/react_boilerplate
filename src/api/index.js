import http from './http'

import { dispatchUpdate, dispatchError } from 'api/helpers/handlerResponses'
import { interceptPromise } from 'api/helpers/handlerPromisses'

export default {
  async get (url, reference = '') {
    try {
      const { data } = await interceptPromise(http.get(url), reference)
      return data
    } catch (err) {
      dispatchError(err.response)
    }
  },
  async create (url, send, msg, reference = '') {
    try {
      const resp = await interceptPromise(http.post(url, send), reference)
      if (msg) dispatchUpdate(msg)
      return resp.data || true
    } catch (err) {
      console.log(err)
      dispatchError(err.response)
      return false
    }
  },
  async update (url, send, msg, reference = '') {
    try {
      const resp = await interceptPromise(http.put(url, send), reference)
      dispatchUpdate(msg)
      return resp.data || true
    } catch (err) {
      dispatchError(err.response)
      return false
    }
  },
  async delete (url, msg, reference = '') {
    try {
      await interceptPromise(http.delete(url), reference)
      dispatchUpdate(msg)
      return true
    } catch (err) {
      dispatchError(err.response)
    }
  },
  async listAll (url) {
    try {
      const { data } = interceptPromise(await http.get(url))
      return data
    } catch (err) {
      dispatchError(err.response)
    }
  },
  async listAllPaginate (url, { page = 1, limit = 10, filter = '' }) {
    try {
      const { data } = await interceptPromise(http.get(`${url}?page=${page}&limit=${limit}${filter}`))
      return data
    } catch (err) {
      dispatchError(err.response)
    }
  },
  async listAllFilter (url, { valueQuery = '' }, reference = '') {
    try {
      let params = valueQuery && !valueQuery.includes('page') ? `${valueQuery}&page=1` : valueQuery
      params = valueQuery && !valueQuery.includes('limit') ? `${valueQuery}&limit=1` : valueQuery
      const { data } = await interceptPromise(http.get(`${url}/?${params}`), reference)
      return data
    } catch (err) {
      dispatchError(err.response)
    }
  },
  async listOne (url, { id }, reference = '') {
    try {
      const { data } = await interceptPromise(http.get(`${url}/${id}`), reference)
      return data
    } catch (err) {
      dispatchError(err.response)
    }
  }
}
