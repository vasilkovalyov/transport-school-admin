import { LinksPageAboutCourseSections } from 'src/constants/routes';

import SectionHero from './SectionHero/SectionHero';
import SectionCourseForPeople from './SectionCourseForPeople/SectionCourseForPeople';
import SectionStructEducation from './SectionStructEducation/SectionStructEducation';
import SectionOurBenefits from './SectionOurBenefits/SectionOurBenefits';
import SectionWhoTeach from './SectionWhoTeach/SectionWhoTeach';
import SectionCta from './SectionCta/SectionCta';

export const pages = [
  {
    path: LinksPageAboutCourseSections.HERO,
    element: <SectionHero />,
  },
  {
    path: LinksPageAboutCourseSections.COURSE_FOR_PEOPLE,
    element: <SectionCourseForPeople />,
  },
  {
    path: LinksPageAboutCourseSections.STRUCT_EDUCATION,
    element: <SectionStructEducation />,
  },
  {
    path: LinksPageAboutCourseSections.OUR_BENEFITS,
    element: <SectionOurBenefits />,
  },
  {
    path: LinksPageAboutCourseSections.WHO_TEACH,
    element: <SectionWhoTeach />,
  },
  {
    path: LinksPageAboutCourseSections.CTA,
    element: <SectionCta />,
  },
];
