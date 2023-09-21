import { Outlet } from 'react-router-dom';
import { Header } from '@/src/components';

export default function PrivateLayout() {
  return (
    <>
      <Header />
      <main className="main">
        <Outlet />
      </main>
    </>
  );
}
