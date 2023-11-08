import Seo from './Seo/Seo';
import SectionHero from './SectionHero/SectionHero';
import SectionAbout from './SectionAbout/SectionAbout';
import SectionAchivments from './SectionAchivments/SectionAchivments';
import SectionBlog from './SectionBlog/SectionBlog';
import SectionFaq from './SectionFaq/SectionFaq';
import SectionReview from './SectionReview/SectionReview';
import SectionsContacts from './SectionsContacts/SectionsContacts';
import { PageCompanySections } from '@/src/constants/routes/pages';

export const pages = [
  {
    path: PageCompanySections.SEO,
    element: <Seo />,
  },
  {
    path: PageCompanySections.HERO,
    element: <SectionHero />,
  },
  {
    path: PageCompanySections.ABOUT,
    element: <SectionAbout />,
  },
  {
    path: PageCompanySections.ACHIVMENTS,
    element: <SectionAchivments />,
  },
  {
    path: PageCompanySections.BLOG,
    element: <SectionBlog />,
  },
  {
    path: PageCompanySections.FAQ,
    element: <SectionFaq />,
  },
  {
    path: PageCompanySections.REVIEWS,
    element: <SectionReview />,
  },
  {
    path: PageCompanySections.CONTACTS,
    element: <SectionsContacts />,
  },
];
