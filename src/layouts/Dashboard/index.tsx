import { Outlet, Link } from 'react-router-dom';

export function DashboardLayout() {
  return (
    <div>
      <h1>Dashboard Layout</h1>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='msg'>About</Link>
          </li>
        </ul>
      </nav>

      <hr />

      <Outlet />
    </div>
  );
}
