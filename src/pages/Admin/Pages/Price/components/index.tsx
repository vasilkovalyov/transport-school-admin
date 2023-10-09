import { LinksPagePriceSections } from 'src/constants/routes';

import Seo from './Seo/Seo';
import SectionHero from './SectionHero/SectionHero';
import SectionFormatLessons from './SectionFormatLessons/SectionFormatLessons';
import SectionTeamEducation from './SectionTeamEducation/SectionTeamEducation';
import SectionRequirement from './SectionRequirement/SectionRequirement';
import SectionsContacts from './SectionsContacts/SectionsContacts';

export const pages = [
  {
    path: LinksPagePriceSections.SEO,
    element: <Seo />,
  },
  {
    path: LinksPagePriceSections.HERO,
    element: <SectionHero />,
  },
  {
    path: LinksPagePriceSections.FORMAT_LESSONS,
    element: <SectionFormatLessons />,
  },
  {
    path: LinksPagePriceSections.EDUCATION,
    element: <SectionTeamEducation />,
  },
  {
    path: LinksPagePriceSections.REQUIREMENT,
    element: <SectionRequirement />,
  },
  {
    path: LinksPagePriceSections.CONTACTS,
    element: <SectionsContacts />,
  },
];
