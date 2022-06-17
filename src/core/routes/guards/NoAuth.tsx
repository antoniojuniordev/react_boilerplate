import { Navigate, Route } from 'react-router-dom';

interface Props {
  component: React.FC;
  path?: string;
}
export default function NoAuth({ component: Component, path }: Props) {
  const token = window.localStorage.getItem('token');

  if (token) return <Navigate to='/dashboard' />;

  if (path) return <Route path={path} element={<Component />} />;

  return <Component />;
}
