import { Outlet } from 'react-router-dom';

export default function PublicLayout() {
  return (
    <>
      <main className="main">
        <Outlet />
      </main>
    </>
  );
}
