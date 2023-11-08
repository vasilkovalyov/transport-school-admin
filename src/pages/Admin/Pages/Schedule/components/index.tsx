import Seo from './Seo/Seo';
import SectionHero from './SectionHero/SectionHero';
import SectionSchedule from './SectionSchedule/SectionSchedule';
import SectionsContacts from './SectionsContacts/SectionsContacts';
import { PageScheduleSections } from '@/src/constants/routes/pages';

export const pages = [
  {
    path: PageScheduleSections.SEO,
    element: <Seo />,
  },
  {
    path: PageScheduleSections.HERO,
    element: <SectionHero />,
  },
  {
    path: PageScheduleSections.SCHEDULE,
    element: <SectionSchedule />,
  },
  {
    path: PageScheduleSections.CONTACTS,
    element: <SectionsContacts />,
  },
];
