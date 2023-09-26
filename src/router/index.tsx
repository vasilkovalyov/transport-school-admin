import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';

import { PublicLayout, PrivateLayout } from 'src/layouts';
import { Links } from 'src/constants/routes';

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

import {
  Blog,
  BlogCreate,
  BlogEdit,
  LessonScheduleCreate,
  LessonScheduleEdit,
  LessonSchedule,
  ServiceCreate,
  ServiceEdit,
  Services,
} from 'src/pages/Admin/Concepts';

import {
  PageSectionAchivments,
  PageSectionContacts,
  PageSectionFaq,
  PageSectionCta,
  PageSectionReview,
  PageSectionReviewCreate,
  PageSectionReviewEdit,
} from '../pages/Admin/PageSections';

import {
  SectionHero,
  SectionAboutCourse,
  SectionAboutUs,
  SectionAchivments,
  SectionFaq,
  SectionFormatLessons,
} from '../pages/Admin/Pages/Home/components';

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
            path: Links.ADMIN_PAGES,
            element: <PageHome />,
            children: [
              {
                path: Links.ADMIN_PAGES_HOME_SECTION_HERO,
                element: <SectionHero />,
              },
              {
                path: Links.ADMIN_PAGES_HOME_SECTION_ABOUT_COURSE,
                element: <SectionAboutCourse />,
              },
              {
                path: Links.ADMIN_PAGES_HOME_SECTION_ABOUT_US,
                element: <SectionAboutUs />,
              },
              {
                path: Links.ADMIN_PAGES_HOME_SECTION_ACHIVMENTS,
                element: <SectionAchivments />,
              },
              {
                path: Links.ADMIN_PAGES_HOME_SECTION_FAQ,
                element: <SectionFaq />,
              },
              {
                path: Links.ADMIN_PAGES_HOME_SECTION_FORMAT_LESSONS,
                element: <SectionFormatLessons />,
              },
            ],
          },
          {
            path: Links.ADMIN_PAGES_ABOUT_COURSE,
            element: <PageAboutCourse />,
          },
          {
            path: Links.ADMIN_PAGES_BLOG,
            element: <PageBlog />,
          },
          {
            path: Links.ADMIN_PAGES_COMPANY,
            element: <PageCompany />,
          },
          {
            path: Links.ADMIN_PAGES_CONTACT,
            element: <PageContact />,
          },
          {
            path: Links.ADMIN_PAGES_PRICE,
            element: <PagePrice />,
          },
          {
            path: Links.ADMIN_PAGES_SCHEDULE,
            element: <PageSchedule />,
          },
          {
            path: Links.ADMIN_PAGES_SETTINGS,
            element: <PageSettings />,
          },
        ],
      },
      {
        element: <Outlet />,
        children: [
          {
            path: Links.ADMIN_PAGE_SECTION_ACHIVMENTS,
            element: <PageSectionAchivments />,
          },
          {
            path: Links.ADMIN_PAGE_SECTION_CONTACTS,
            element: <PageSectionContacts />,
          },
          {
            path: Links.ADMIN_PAGE_SECTION_FAQ,
            element: <PageSectionFaq />,
          },
          {
            path: Links.ADMIN_PAGE_SECTION_CTA,
            element: <PageSectionCta />,
          },
          {
            path: Links.ADMIN_PAGE_SECTION_REVIEW,
            element: <PageSectionReview />,
          },
          {
            path: `${Links.ADMIN_PAGE_SECTION_REVIEW_EDIT}/:id`,
            element: <PageSectionReviewEdit />,
          },
          {
            path: Links.ADMIN_PAGE_SECTION_REVIEW_CREATE,
            element: <PageSectionReviewCreate />,
          },
        ],
      },
      {
        element: <Outlet />,
        children: [
          {
            path: Links.ADMIN_BLOG,
            element: <Blog />,
          },
          {
            path: Links.ADMIN_BLOG_CREATE,
            element: <BlogCreate />,
          },
          {
            path: `${Links.ADMIN_BLOG_EDIT}/:id`,
            element: <BlogEdit />,
          },
          {
            path: Links.ADMIN_LESSON_SCHEDULE,
            element: <LessonSchedule />,
          },
          {
            path: Links.ADMIN_LESSON_SCHEDULE_CREATE,
            element: <LessonScheduleCreate />,
          },
          {
            path: `${Links.ADMIN_LESSON_SCHEDULE_EDIT}/:id`,
            element: <LessonScheduleEdit />,
          },
          {
            path: Links.ADMIN_SERVICES,
            element: <Services />,
          },
          {
            path: Links.ADMIN_SERVICES_CREATE,
            element: <ServiceCreate />,
          },
          {
            path: `${Links.ADMIN_SERVICES_EDIT}/:id`,
            element: <ServiceEdit />,
          },
        ],
      },
    ],
  },
  { path: '*', element: <ErrorPage /> },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
