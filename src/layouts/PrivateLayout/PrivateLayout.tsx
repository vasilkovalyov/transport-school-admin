import { Navigate, Outlet } from 'react-router-dom';
import { Header } from '@/src/components';

import './PrivateLayout.scss';
import { Links } from '@/src/constants/routes';
import { getTokenFromLC } from '@/src/utils/localStorage';

export default function PrivateLayout() {
  if (!getTokenFromLC()) {
    return <Navigate to={Links.LOGIN} replace={true} />;
  }

  return (
    <div className="private-layout">
      <Header />
      <main className="main">
        <Outlet />
      </main>
    </div>
  );
}
