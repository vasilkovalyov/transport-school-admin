import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';

import { PublicLayout, PrivateLayout } from 'src/layouts';

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
import { Dashboard } from '../constants/routes/dashboard';
import { Pages } from '../constants/routes/pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: Dashboard.LOGIN,
    element: <PublicLayout />,
    children: [
      {
        index: true,
        element: <LoginPage />,
      },
    ],
  },
  {
    path: Dashboard.REGISTRATION_ADMIN,
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
        path: Dashboard.ADMIN,
        element: <AdminOverview />,
      },
      {
        element: <Outlet />,
        children: [
          {
            path: Pages.HOME,
            element: <PageHome />,
            children: homeSectionRoutes,
          },
          {
            path: Pages.ABOUT_COURSE,
            element: <PageAboutCourse />,
            children: aboutCourseSectionRoutes,
          },
          {
            path: Pages.BLOG,
            element: <PageBlog />,
            children: blogSectionsRoutes,
          },
          {
            path: Pages.COMPANY,
            element: <PageCompany />,
            children: companySectionsRoutes,
          },
          {
            path: Pages.CONTACT,
            element: <PageContact />,
            children: contactSectionsRoutes,
          },
          {
            path: Pages.PRICE,
            element: <PagePrice />,
            children: priceSectionsRoutes,
          },
          {
            path: Pages.SCHEDULE,
            element: <PageSchedule />,
            children: aboutScheduleSectionRoutes,
          },
          {
            path: Pages.COMMON_CONTACTS,
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
