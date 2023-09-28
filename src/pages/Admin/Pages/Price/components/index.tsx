import { LinksPagePriceSections } from 'src/constants/routes';

import SectionHero from './SectionHero/SectionHero';
import SectionServices from './SectionServices/SectionServices';
import SectionTeamEducation from './SectionTeamEducation/SectionTeamEducation';
import SectionRequirement from './SectionRequirement/SectionRequirement';
import SectionsContacts from './SectionsContacts/SectionsContacts';

export const pages = [
  {
    path: LinksPagePriceSections.HERO,
    element: <SectionHero />,
  },
  {
    path: LinksPagePriceSections.SERVICES,
    element: <SectionServices />,
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
