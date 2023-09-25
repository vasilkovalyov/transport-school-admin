import { Outlet } from 'react-router-dom';
import { Header } from '@/src/components';

import './PrivateLayout.scss';

export default function PrivateLayout() {
  return (
    <div className="private-layout">
      <Header />
      <main className="main">
        <Outlet />
      </main>
    </div>
  );
}
