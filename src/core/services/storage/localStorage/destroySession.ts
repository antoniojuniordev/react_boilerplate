export interface DestroySessionProps {
  destroySession: () => boolean;
}

export function destroySession(): boolean {
  window.localStorage.clear();
  if (window.location.pathname !== '/') window.location.href = '/';
  return true;
}
