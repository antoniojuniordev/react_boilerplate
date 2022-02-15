import { Outlet, Link } from 'react-router-dom';

export function BaseLayout() {
  return (
    <div>
      <h1>Base Layout</h1>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/dashboard'>Dashboard</Link>
          </li>
        </ul>
      </nav>

      <hr />

      <Outlet />
    </div>
  );
}
