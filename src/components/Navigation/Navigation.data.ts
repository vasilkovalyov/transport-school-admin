import { IconEnum } from '../Icon/Icon.type';
import { NavigationLinkItemProps } from './Navigation.type';
import {
  Links,
  LinksPageSections,
  LinksConcepts,
  LinksPages,
} from 'src/constants/routes';

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
        path: LinksConcepts.BLOG,
      },

      {
        id: '3-2',
        name: 'Lesson Schedule',
        path: LinksConcepts.LESSON_SCHEDULE,
      },
      {
        id: '3-3',
        name: 'Services',
        path: LinksConcepts.SERVICES,
      },
    ],
  },
  {
    id: '4',
    name: 'Pages',
    children: [
      {
        id: '4-1',
        path: LinksPages.HOME,
        name: 'Home',
        icon: IconEnum.HOME,
      },
      {
        id: '4-2',
        path: LinksPages.ABOUT_COURSE,
        name: 'About Course',
        icon: IconEnum.ABOUT,
      },
      {
        id: '4-3',
        path: LinksPages.BLOG,
        name: 'Blog',
        icon: IconEnum.BLOG,
      },
      {
        id: '4-4',
        path: LinksPages.COMPANY,
        name: 'Company',
        icon: IconEnum.COMPANY,
      },
      {
        id: '4-5',
        path: LinksPages.CONTACT,
        name: 'Contact',
        icon: IconEnum.CONTACT,
      },
      {
        id: '4-6',
        path: LinksPages.PRICE,
        name: 'Price',
        icon: IconEnum.PRICE,
      },
      {
        id: '4-7',
        path: LinksPages.SCHEDULE,
        name: 'Schedule',
        icon: IconEnum.SCHEDULE,
      },
      {
        id: '4-8',
        path: LinksPages.SETTINGS,
        name: 'Settings',
        icon: IconEnum.SETTINGS,
      },
      {
        id: '4-9',
        name: 'Sections',
        children: [
          {
            id: '4-9-1',
            path: LinksPageSections.ACHIVMENTS,
            name: 'Achivments',
          },
          {
            id: '4-9-2',
            path: LinksPageSections.CONTACTS,
            name: 'Contacts',
          },
          {
            id: '4-9-3',
            path: LinksPageSections.FAQ,
            name: 'Faq',
          },
          {
            id: '4-9-4',
            path: LinksPageSections.REVIEW,
            name: 'Review',
          },
          {
            id: '4-9-5',
            path: LinksPageSections.CTA,
            name: 'Cta',
          },
        ],
      },
    ],
  },
];
