import { LinksPageHomeSections } from 'src/constants/routes';

import Seo from './Seo/Seo';
import SectionHero from './SectionHero/SectionHero';
import SectionAboutCourse from './SectionAboutCourse/SectionAboutCourse';
import SectionAboutUs from './SectionAboutUs/SectionAboutUs';
import SectionAchivments from './SectionAchivments/SectionAchivments';
import SectionFaq from './SectionFaq/SectionFaq';
import SectionFormatLessons from './SectionFormatLessons/SectionFormatLessons';

export const pages = [
  {
    path: LinksPageHomeSections.SEO,
    element: <Seo />,
  },
  {
    path: LinksPageHomeSections.HERO,
    element: <SectionHero />,
  },
  {
    path: LinksPageHomeSections.ABOUT_COURSE,
    element: <SectionAboutCourse />,
  },
  {
    path: LinksPageHomeSections.ABOUT_US,
    element: <SectionAboutUs />,
  },
  {
    path: LinksPageHomeSections.ACHIVMENTS,
    element: <SectionAchivments />,
  },
  {
    path: LinksPageHomeSections.FAQ,
    element: <SectionFaq />,
  },
  {
    path: LinksPageHomeSections.FORMAT_LESSONS,
    element: <SectionFormatLessons />,
  },
];
