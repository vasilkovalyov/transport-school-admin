import Seo from './Seo/Seo';
import SectionHero from './SectionHero/SectionHero';
import SectionAboutCourse from './SectionAboutCourse/SectionAboutCourse';
import SectionAboutUs from './SectionAboutUs/SectionAboutUs';
import SectionAchivments from './SectionAchivments/SectionAchivments';
import SectionFaq from './SectionFaq/SectionFaq';
import SectionFormatLessons from './SectionFormatLessons/SectionFormatLessons';
import { PageHomeSections } from '@/src/constants/routes/pages';

export const pages = [
  {
    path: PageHomeSections.SEO,
    element: <Seo />,
  },
  {
    path: PageHomeSections.HERO,
    element: <SectionHero />,
  },
  {
    path: PageHomeSections.ABOUT_COURSE,
    element: <SectionAboutCourse />,
  },
  {
    path: PageHomeSections.ABOUT_US,
    element: <SectionAboutUs />,
  },
  {
    path: PageHomeSections.ACHIVMENTS,
    element: <SectionAchivments />,
  },
  {
    path: PageHomeSections.FAQ,
    element: <SectionFaq />,
  },
  {
    path: PageHomeSections.FORMAT_LESSONS,
    element: <SectionFormatLessons />,
  },
];
