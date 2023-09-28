import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';

import { PublicLayout, PrivateLayout } from 'src/layouts';
import { Links, LinksPages } from 'src/constants/routes';

import { AdminHomePage, LoginPage, ErrorPage, AdminAccount } from 'src/pages';

import {
  PageHome,
  PageAboutCourse,
  PageBlog,
  PageCompany,
  PageContact,
  PagePrice,
  PageSchedule,
  PageSettings,
} from 'src/pages/Admin/Pages';

import { pages as conceptsRoutes } from 'src/pages/Admin/Concepts';
import { pages as pageSectionRoutes } from '../pages/Admin/PageSections';
import { pages as homeSectionRoutes } from '../pages/Admin/Pages/Home/components';
import { pages as priceSectionsRoutes } from '../pages/Admin/Pages/Price/components';

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
      {
        path: Links.ADMIN_ACCOUNT,
        element: <AdminAccount />,
      },
      {
        element: <Outlet />,
        children: [
          {
            path: LinksPages.HOME,
            element: <PageHome />,
            children: homeSectionRoutes,
          },
          {
            path: LinksPages.ABOUT_COURSE,
            element: <PageAboutCourse />,
          },
          {
            path: LinksPages.BLOG,
            element: <PageBlog />,
          },
          {
            path: LinksPages.COMPANY,
            element: <PageCompany />,
          },
          {
            path: LinksPages.CONTACT,
            element: <PageContact />,
          },
          {
            path: LinksPages.PRICE,
            element: <PagePrice />,
            children: priceSectionsRoutes,
          },
          {
            path: LinksPages.SCHEDULE,
            element: <PageSchedule />,
          },
          {
            path: LinksPages.SETTINGS,
            element: <PageSettings />,
          },
        ],
      },
      {
        element: <Outlet />,
        children: pageSectionRoutes,
      },
      {
        element: <Outlet />,
        children: conceptsRoutes,
      },
    ],
  },
  { path: '*', element: <ErrorPage /> },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
