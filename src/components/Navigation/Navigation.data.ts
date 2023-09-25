import { IconEnum } from '../Icon/Icon.type';
import { NavigationLinkItemProps } from './Navigation.type';
import { Links } from 'src/constants/routes';

export const menuNavigaton: NavigationLinkItemProps[] = [
  {
    id: '1',
    name: 'Overview',
    path: Links.ADMIN,
  },
  {
    id: '2',
    name: 'Account',
    path: Links.ADMIN_ACCOUNT,
  },
  {
    id: '3',
    name: 'Concepts',
    children: [
      {
        id: '3-1',
        name: 'Blog',
        path: Links.ADMIN_BLOG,
      },

      {
        id: '3-2',
        name: 'Lesson Schedule',
        path: Links.ADMIN_LESSON_SCHEDULE,
      },
      {
        id: '3-3',
        name: 'Services',
        path: Links.ADMIN_SERVICES,
      },
    ],
  },
  {
    id: '4',
    name: 'Pages',
    children: [
      {
        id: '4-1',
        path: Links.ADMIN_PAGES,
        name: 'Home',
        icon: IconEnum.HOME,
      },
      {
        id: '4-2',
        path: Links.ADMIN_PAGES_ABOUT_COURSE,
        name: 'About Course',
        icon: IconEnum.ABOUT,
      },
      {
        id: '4-3',
        path: Links.ADMIN_PAGES_BLOG,
        name: 'Blog',
        icon: IconEnum.BLOG,
      },
      {
        id: '4-4',
        path: Links.ADMIN_PAGES_COMPANY,
        name: 'Company',
        icon: IconEnum.COMPANY,
      },
      {
        id: '4-5',
        path: Links.ADMIN_PAGES_CONTACT,
        name: 'Contact',
        icon: IconEnum.CONTACT,
      },
      {
        id: '4-6',
        path: Links.ADMIN_PAGES_PRICE,
        name: 'Price',
        icon: IconEnum.PRICE,
      },
      {
        id: '4-7',
        path: Links.ADMIN_PAGES_SCHEDULE,
        name: 'Schedule',
        icon: IconEnum.SCHEDULE,
      },
      {
        id: '4-8',
        path: Links.ADMIN_PAGES_SETTINGS,
        name: 'Settings',
        icon: IconEnum.SETTINGS,
      },
      {
        id: '4-9',
        name: 'Sections',
        children: [
          {
            id: '4-9-1',
            path: Links.ADMIN_PAGE_SECTION_ACHIVMENTS,
            name: 'Achivments',
          },
          {
            id: '4-9-2',
            path: Links.ADMIN_PAGE_SECTION_CONTACTS,
            name: 'Contacts',
          },
          {
            id: '4-9-3',
            path: Links.ADMIN_PAGE_SECTION_FAQ,
            name: 'Faq',
          },
          {
            id: '4-9-4',
            path: Links.ADMIN_PAGE_SECTION_REVIEW,
            name: 'Review',
          },
          {
            id: '4-9-5',
            path: Links.ADMIN_PAGE_SECTION_CTA,
            name: 'Cta',
          },
        ],
      },
    ],
  },
];
