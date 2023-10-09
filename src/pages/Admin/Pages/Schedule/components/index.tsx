import { LinksPageScheduleSections } from 'src/constants/routes';

import Seo from './Seo/Seo';
import SectionHero from './SectionHero/SectionHero';
import SectionSchedule from './SectionSchedule/SectionSchedule';
import SectionsContacts from './SectionsContacts/SectionsContacts';

export const pages = [
  {
    path: LinksPageScheduleSections.SEO,
    element: <Seo />,
  },
  {
    path: LinksPageScheduleSections.HERO,
    element: <SectionHero />,
  },
  {
    path: LinksPageScheduleSections.SCHEDULE,
    element: <SectionSchedule />,
  },
  {
    path: LinksPageScheduleSections.CONTACTS,
    element: <SectionsContacts />,
  },
];
