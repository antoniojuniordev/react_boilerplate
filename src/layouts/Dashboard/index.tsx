import { Outlet, Link } from 'react-router-dom';

export function DashboardLayout() {
  return (
    <div>
      <h1>Dashboard Layout</h1>
      <Outlet />
    </div>
  );
}
