export function setSession(token = '') {
  try {
    window.localStorage.setItem('token', token);
    return;
  } catch (error) {
    throw new Error('set session error');
  }
}

export function getSession() {
  try {
    const token = window.localStorage.getItem('token');
    if (token) {
      return token;
    }
    return '';
  } catch (error) {
    throw new Error('get session error');
  }
}

export function destroySession() {
  try {
    window.localStorage.clear();
    if (window.location.pathname !== '/') window.location.href = '/';
  } catch (error) {
    throw new Error('destroy session error');
  }
}
