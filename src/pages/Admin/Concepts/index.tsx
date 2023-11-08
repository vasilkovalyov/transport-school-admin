import { Blog, BlogCreate, BlogEdit } from './Blog';
import {
  LessonSchedule,
  LessonScheduleCreate,
  LessonScheduleEdit,
  LessonScheduleStudents,
} from './LessonSchedule';
import { Services, ServiceCreate, ServiceEdit } from './Services';
import { Students, Student } from './Students';
import { Concepts } from '@/src/constants/routes/concepts';

export const pages = [
  {
    path: Concepts.BLOG,
    element: <Blog />,
  },
  {
    path: Concepts.BLOG_CREATE,
    element: <BlogCreate />,
  },
  {
    path: `${Concepts.BLOG_EDIT}/:id`,
    element: <BlogEdit />,
  },
  {
    path: Concepts.LESSON_SCHEDULE,
    element: <LessonSchedule />,
  },
  {
    path: Concepts.LESSON_SCHEDULE_CREATE,
    element: <LessonScheduleCreate />,
  },
  {
    path: `${Concepts.LESSON_SCHEDULE_EDIT}/:id`,
    element: <LessonScheduleEdit />,
  },
  {
    path: `${Concepts.LESSON_SCHEDULE_STUDENTS}/:id`,
    element: <LessonScheduleStudents />,
  },
  {
    path: Concepts.SERVICES,
    element: <Services />,
  },
  {
    path: Concepts.SERVICES_CREATE,
    element: <ServiceCreate />,
  },
  {
    path: `${Concepts.SERVICES_EDIT}/:id`,
    element: <ServiceEdit />,
  },
  {
    path: Concepts.STUDENTS,
    element: <Students />,
  },
  {
    path: `${Concepts.STUDENTS}/:id`,
    element: <Student />,
  },
];
