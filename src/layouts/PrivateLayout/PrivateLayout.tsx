import { Navigate, Outlet } from 'react-router-dom';
import { Header } from '@/src/components';

import './PrivateLayout.scss';
import { getTokenFromLC } from '@/src/utils/localStorage';
import { Dashboard } from '@/src/constants/routes/dashboard';

export default function PrivateLayout() {
  if (!getTokenFromLC()) {
    return <Navigate to={Dashboard.LOGIN} replace={true} />;
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
