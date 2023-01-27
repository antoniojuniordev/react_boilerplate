import { destroySession } from 'core/services/storage'

export function handleResponse(response: Response) {
  return response.text().then((text: string) => {
    const data = text && JSON.parse(text)

    if (!response.ok) {
      if ([401].includes(response.status)) destroySession()
      const error = (data && data.message) || response.statusText
      return Promise.reject(error)
    }

    return data
  })
}
