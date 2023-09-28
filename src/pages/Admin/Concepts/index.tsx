import { LinksConcepts } from 'src/constants/routes';

import { Blog, BlogCreate, BlogEdit } from './Blog';
import {
  LessonSchedule,
  LessonScheduleCreate,
  LessonScheduleEdit,
} from './LessonSchedule';
import { Services, ServiceCreate, ServiceEdit } from './Services';

export const pages = [
  {
    path: LinksConcepts.BLOG,
    element: <Blog />,
  },
  {
    path: LinksConcepts.BLOG_CREATE,
    element: <BlogCreate />,
  },
  {
    path: `${LinksConcepts.BLOG_EDIT}/:id`,
    element: <BlogEdit />,
  },
  {
    path: LinksConcepts.LESSON_SCHEDULE,
    element: <LessonSchedule />,
  },
  {
    path: LinksConcepts.LESSON_SCHEDULE_CREATE,
    element: <LessonScheduleCreate />,
  },
  {
    path: `${LinksConcepts.LESSON_SCHEDULE_EDIT}/:id`,
    element: <LessonScheduleEdit />,
  },
  {
    path: LinksConcepts.SERVICES,
    element: <Services />,
  },
  {
    path: LinksConcepts.SERVICES_CREATE,
    element: <ServiceCreate />,
  },
  {
    path: `${LinksConcepts.SERVICES_EDIT}/:id`,
    element: <ServiceEdit />,
  },
];
