import Seo from './Seo/Seo';
import SectionHero from './SectionHero/SectionHero';
import SectionCourseForPeople from './SectionCourseForPeople/SectionCourseForPeople';
import SectionStructEducation from './SectionStructEducation/SectionStructEducation';
import SectionOurBenefits from './SectionOurBenefits/SectionOurBenefits';
import SectionWhoTeach from './SectionWhoTeach/SectionWhoTeach';
import SectionCta from './SectionCta/SectionCta';
import { PageAboutCourseSections } from '@/src/constants/routes/pages';

export const pages = [
  {
    path: PageAboutCourseSections.SEO,
    element: <Seo />,
  },
  {
    path: PageAboutCourseSections.HERO,
    element: <SectionHero />,
  },
  {
    path: PageAboutCourseSections.COURSE_FOR_PEOPLE,
    element: <SectionCourseForPeople />,
  },
  {
    path: PageAboutCourseSections.STRUCT_EDUCATION,
    element: <SectionStructEducation />,
  },
  {
    path: PageAboutCourseSections.OUR_BENEFITS,
    element: <SectionOurBenefits />,
  },
  {
    path: PageAboutCourseSections.WHO_TEACH,
    element: <SectionWhoTeach />,
  },
  {
    path: PageAboutCourseSections.CTA,
    element: <SectionCta />,
  },
];
