import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';

import { AdminHomePage, LoginPage, ErrorPage } from 'src/pages';

import { PublicLayout, PrivateLayout } from 'src/layouts';
import { Links } from 'src/constants/routes';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Outlet />,
  },
  {
    path: Links.LOGIN,
    element: <PublicLayout />,
    children: [
      {
        index: true,
        element: <LoginPage />,
      },
    ],
  },
  {
    element: <PrivateLayout />,
    children: [
      {
        index: true,
        path: Links.ADMIN,
        element: <AdminHomePage />,
      },
    ],
  },
  { path: '*', element: <ErrorPage /> },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
