import Seo from './Seo/Seo';
import SectionHero from './SectionHero/SectionHero';
import SectionFormatLessons from './SectionFormatLessons/SectionFormatLessons';
import SectionTeamEducation from './SectionTeamEducation/SectionTeamEducation';
import SectionRequirement from './SectionRequirement/SectionRequirement';
import SectionsContacts from './SectionsContacts/SectionsContacts';
import { PagePriceSections } from '@/src/constants/routes/pages';

export const pages = [
  {
    path: PagePriceSections.SEO,
    element: <Seo />,
  },
  {
    path: PagePriceSections.HERO,
    element: <SectionHero />,
  },
  {
    path: PagePriceSections.FORMAT_LESSONS,
    element: <SectionFormatLessons />,
  },
  {
    path: PagePriceSections.EDUCATION,
    element: <SectionTeamEducation />,
  },
  {
    path: PagePriceSections.REQUIREMENT,
    element: <SectionRequirement />,
  },
  {
    path: PagePriceSections.CONTACTS,
    element: <SectionsContacts />,
  },
];
