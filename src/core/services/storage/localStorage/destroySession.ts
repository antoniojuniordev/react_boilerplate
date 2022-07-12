export interface DestroySessionProps {
  destroySession: () => boolean;
}

export function destroySession(): boolean {
  try {
    window.localStorage.clear();
    if (window.location.pathname !== '/') window.location.href = '/';
    return true;
  } catch (error) {
    return false;
  }
}
