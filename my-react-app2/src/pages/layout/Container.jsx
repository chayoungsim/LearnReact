import { Outlet, useLocation } from 'react-router-dom'

export default function Container() {
  const location = useLocation();
  const pageClass = location.pathname === '/' ? 'main' : 'sub';

  return (
    <div id="container" className={pageClass}>        
        <div id="contents" className={pageClass}>
            <Outlet />
        </div>
    </div>
  );
}