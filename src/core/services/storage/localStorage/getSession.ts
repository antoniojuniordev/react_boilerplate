export interface GetSessionProps {
  getSession: () => object;
}

export function getSession(): object {
  try {
    const session = window.localStorage.getItem('session');
    if (session) {
      return JSON.parse(session);
    }
    return {};
  } catch (error) {
    return {};
  }
}
