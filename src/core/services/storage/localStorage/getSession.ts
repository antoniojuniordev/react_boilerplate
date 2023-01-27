import typeStorage from './types'
export interface GetSessionProps {
  getSession: <Data>() => Data
}

export function getSession<Data>(): Data {
  try {
    const session = window.localStorage.getItem(typeStorage.session)
    if (session) {
      return JSON.parse(session)
    }
    return {} as Data
  } catch (error) {
    return {} as Data
  }
}
