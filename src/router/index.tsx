import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';

import { PublicLayout, PrivateLayout } from 'src/layouts';
import { Links, LinksPages } from 'src/constants/routes';

import { AdminOverview, LoginPage, RegisterAdmin, ErrorPage } from 'src/pages';

import {
  PageHome,
  PageAboutCourse,
  PageBlog,
  PageCompany,
  PageContact,
  PagePrice,
  PageSchedule,
  PageCommonContacts,
} from 'src/pages/Admin/Pages';

import HomePage from 'src/pages/Home';

import { pages as conceptsRoutes } from 'src/pages/Admin/Concepts';
import { pages as pageSectionRoutes } from '../pages/Admin/PageSections';

import { pages as homeSectionRoutes } from '../pages/Admin/Pages/Home/components';
import { pages as aboutCourseSectionRoutes } from '../pages/Admin/Pages/AboutCourse/components';
import { pages as aboutScheduleSectionRoutes } from '../pages/Admin/Pages/Schedule/components';
import { pages as priceSectionsRoutes } from '../pages/Admin/Pages/Price/components';
import { pages as companySectionsRoutes } from '../pages/Admin/Pages/Company/components';
import { pages as blogSectionsRoutes } from '../pages/Admin/Pages/Blog/components';
import { pages as contactSectionsRoutes } from '../pages/Admin/Pages/Contact/components';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
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
    path: Links.REGISTRATION_ADMIN,
    element: <PublicLayout />,
    children: [
      {
        index: true,
        element: <RegisterAdmin />,
      },
    ],
  },
  {
    element: <PrivateLayout />,
    children: [
      {
        index: true,
        path: Links.ADMIN,
        element: <AdminOverview />,
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
            children: aboutCourseSectionRoutes,
          },
          {
            path: LinksPages.BLOG,
            element: <PageBlog />,
            children: blogSectionsRoutes,
          },
          {
            path: LinksPages.COMPANY,
            element: <PageCompany />,
            children: companySectionsRoutes,
          },
          {
            path: LinksPages.CONTACT,
            element: <PageContact />,
            children: contactSectionsRoutes,
          },
          {
            path: LinksPages.PRICE,
            element: <PagePrice />,
            children: priceSectionsRoutes,
          },
          {
            path: LinksPages.SCHEDULE,
            element: <PageSchedule />,
            children: aboutScheduleSectionRoutes,
          },
          {
            path: LinksPages.COMMON_CONTACTS,
            element: <PageCommonContacts />,
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
