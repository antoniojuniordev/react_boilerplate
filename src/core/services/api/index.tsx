import { getSession } from 'core/services/storage'
import { handleResponse } from './handlers/handleResponse'
import { handlerParams } from './handlers/handlerParams'

type UseFetchProps = {
  method: 'get' | 'post'
  url: string
  body?: object
  params?: object
}

function authHeader() {
  const token = getSession()
  if (token) return { Authorization: `Bearer ${token}` }
  return
}

export default function apiFetch({ method, url, params, body }: UseFetchProps) {
  const requestOptions: RequestInit = {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...authHeader()
    }
  }
  if (body) requestOptions.body = JSON.stringify(body)

  return fetch(
    handlerParams(`${process.env.REACT_APP_URL}${url}`, params),
    requestOptions
  ).then(handleResponse)
}
