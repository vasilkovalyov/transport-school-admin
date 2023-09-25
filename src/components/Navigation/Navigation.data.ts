import { IconEnum } from '../Icon/Icon.type';
import { NavigationLinkItemProps } from './Navigation.type';
import { Links } from 'src/constants/routes';

export const menuNavigaton: NavigationLinkItemProps[] = [
  {
    id: '1',
    name: 'Concepts',
    children: [
      {
        id: '1-1',
        name: 'Blog',
        path: Links.ADMIN_BLOG,
      },

      {
        id: '1-2',
        name: 'Lesson Schedule',
        path: Links.ADMIN_LESSON_SCHEDULE,
      },
      {
        id: '1-3',
        name: 'Services',
        path: Links.ADMIN_SERVICES,
      },
    ],
  },
  {
    id: '2',
    name: 'Pages',
    children: [
      {
        id: '2-1',
        path: Links.ADMIN_PAGES,
        name: 'Home',
        icon: IconEnum.HOME,
      },
      {
        id: '2-2',
        path: Links.ADMIN_PAGES_ABOUT_COURSE,
        name: 'About Course',
        icon: IconEnum.ABOUT,
      },
      {
        id: '2-3',
        path: Links.ADMIN_PAGES_BLOG,
        name: 'Blog',
        icon: IconEnum.BLOG,
      },
      {
        id: '2-4',
        path: Links.ADMIN_PAGES_COMPANY,
        name: 'Company',
        icon: IconEnum.COMPANY,
      },
      {
        id: '2-5',
        path: Links.ADMIN_PAGES_CONTACT,
        name: 'Contact',
        icon: IconEnum.CONTACT,
      },
      {
        id: '2-6',
        path: Links.ADMIN_PAGES_PRICE,
        name: 'Price',
        icon: IconEnum.PRICE,
      },
      {
        id: '2-7',
        path: Links.ADMIN_PAGES_SCHEDULE,
        name: 'Schedule',
        icon: IconEnum.SCHEDULE,
      },
      {
        id: '2-8',
        path: Links.ADMIN_PAGES_SETTINGS,
        name: 'Settings',
        icon: IconEnum.SETTINGS,
      },
      {
        id: '2-9',
        name: 'Sections',
        children: [
          {
            id: '2-9-1',
            path: Links.ADMIN_PAGE_SECTION_ACHIVMENTS,
            name: 'Achivments',
          },
          {
            id: '2-9-2',
            path: Links.ADMIN_PAGE_SECTION_CONTACTS,
            name: 'Contacts',
          },
          {
            id: '2-9-3',
            path: Links.ADMIN_PAGE_SECTION_FAQ,
            name: 'Faq',
          },
          {
            id: '2-9-4',
            path: Links.ADMIN_PAGE_SECTION_REVIEW,
            name: 'Review',
          },
          {
            id: '2-9-5',
            path: Links.ADMIN_PAGE_SECTION_CTA,
            name: 'Cta',
          },
        ],
      },
    ],
  },
];
