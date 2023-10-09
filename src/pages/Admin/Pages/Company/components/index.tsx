import { LinksPageCompanySections } from 'src/constants/routes';

import Seo from './Seo/Seo';
import SectionHero from './SectionHero/SectionHero';
import SectionAbout from './SectionAbout/SectionAbout';
import SectionAchivments from './SectionAchivments/SectionAchivments';
import SectionBlog from './SectionBlog/SectionBlog';
import SectionFaq from './SectionFaq/SectionFaq';
import SectionReview from './SectionReview/SectionReview';
import SectionsContacts from './SectionsContacts/SectionsContacts';

export const pages = [
  {
    path: LinksPageCompanySections.SEO,
    element: <Seo />,
  },
  {
    path: LinksPageCompanySections.HERO,
    element: <SectionHero />,
  },
  {
    path: LinksPageCompanySections.ABOUT,
    element: <SectionAbout />,
  },
  {
    path: LinksPageCompanySections.ACHIVMENTS,
    element: <SectionAchivments />,
  },
  {
    path: LinksPageCompanySections.BLOG,
    element: <SectionBlog />,
  },
  {
    path: LinksPageCompanySections.FAQ,
    element: <SectionFaq />,
  },
  {
    path: LinksPageCompanySections.REVIEWS,
    element: <SectionReview />,
  },
  {
    path: LinksPageCompanySections.CONTACTS,
    element: <SectionsContacts />,
  },
];
