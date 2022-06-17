import { Outlet } from 'react-router-dom';
import './style.css';

export function BaseLayout() {
  return (
    <div className='container-basic'>
      <div className='basic'>
        <div className='card'>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
