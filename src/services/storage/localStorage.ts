import { useNavigate } from 'react-router-dom';

const routerAuth = [
  '/authenticate',
  '/forgot-password',
  '/forgot-password-code',
];
export function session(sessionPayload = '', url = '') {
  try {
    if (sessionPayload) {
      window.localStorage.setItem('session', JSON.stringify(sessionPayload));
      return false;
    }
    if (routerAuth.includes(url)) return false;
    const jsonSession = window.localStorage.getItem('session');
    if (!jsonSession) return false;
    return JSON.parse(jsonSession);
  } catch (error) {
    throw new Error('format session error');
  }
}

export function getSession() {
  try {
    const session = window.localStorage.getItem('session');
    if (session) {
      return JSON.parse(session);
    }
    throw new Error('get session error');
  } catch (error) {
    throw new Error('get session error');
  }
}

export function destroySession() {
  try {
    const navigate = useNavigate();
    window.localStorage.clear();
    navigate('/');
  } catch (error) {
    throw new Error('destroy session error');
  }
}
