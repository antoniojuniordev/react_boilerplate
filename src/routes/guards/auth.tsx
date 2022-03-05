import { Navigate, Route } from 'react-router-dom';

interface Props {
  component: keyof JSX.IntrinsicElements;
  path?: string;
}
export default function Auth({ component: Component, path }: Props) {
  const token = window.localStorage.getItem('token');

  if (!token) return <Navigate to='/' />;

  if (path) return <Route path={path} element={<Component />} />;

  return <Component />;
}
