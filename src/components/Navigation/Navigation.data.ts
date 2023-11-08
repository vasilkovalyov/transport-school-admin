import { Concepts } from '@/src/constants/routes/concepts';
import { IconEnum } from '../Icon/Icon.type';
import { NavigationLinkItemProps } from './Navigation.type';

import { Dashboard } from '@/src/constants/routes/dashboard';
import { Pages } from '@/src/constants/routes/pages';
import { PageSections } from '@/src/constants/routes/sections';

export const menuNavigaton: NavigationLinkItemProps[] = [
  {
    id: '1',
    name: 'Overview',
    path: Dashboard.ADMIN,
  },
  {
    id: '3',
    name: 'Concepts',
    children: [
      {
        id: '3-1',
        name: 'Blog',
        path: Concepts.BLOG,
      },

      {
        id: '3-2',
        name: 'Lesson Schedule',
        path: Concepts.LESSON_SCHEDULE,
      },
      {
        id: '3-3',
        name: 'Services',
        path: Concepts.SERVICES,
      },
      {
        id: '3-4',
        name: 'Students',
        path: Concepts.STUDENTS,
      },
    ],
  },
  {
    id: '4',
    name: 'Pages',
    children: [
      {
        id: '4-1',
        path: Pages.HOME,
        name: 'Home',
        icon: IconEnum.HOME,
      },
      {
        id: '4-2',
        path: Pages.ABOUT_COURSE,
        name: 'About Course',
        icon: IconEnum.ABOUT,
      },
      {
        id: '4-3',
        path: Pages.BLOG,
        name: 'Blog',
        icon: IconEnum.BLOG,
      },
      {
        id: '4-4',
        path: Pages.COMPANY,
        name: 'Company',
        icon: IconEnum.COMPANY,
      },
      {
        id: '4-5',
        path: Pages.CONTACT,
        name: 'Contact',
        icon: IconEnum.CONTACT,
      },
      {
        id: '4-6',
        path: Pages.PRICE,
        name: 'Price',
        icon: IconEnum.PRICE,
      },
      {
        id: '4-7',
        path: Pages.SCHEDULE,
        name: 'Schedule',
        icon: IconEnum.SCHEDULE,
      },
      {
        id: '4-8',
        path: Pages.COMMON_CONTACTS,
        name: 'Common contacts',
        icon: IconEnum.SETTINGS,
      },
      {
        id: '4-9',
        name: 'Sections',
        children: [
          {
            id: '4-9-1',
            path: PageSections.ACHIVMENTS,
            name: 'Achivments',
          },
          {
            id: '4-9-2',
            path: PageSections.CONTACTS,
            name: 'Contacts',
          },
          {
            id: '4-9-3',
            path: PageSections.FAQ,
            name: 'Faq',
          },
          {
            id: '4-9-4',
            path: PageSections.REVIEW,
            name: 'Review',
          },
          {
            id: '4-9-5',
            path: PageSections.CTA,
            name: 'Cta',
          },
        ],
      },
    ],
  },
];
