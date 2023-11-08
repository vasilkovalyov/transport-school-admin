import PageSectionAchivments from './Achivments/Achivments';
import PageSectionContacts from './Contacts/Contacts';
import PageSectionFaq from './Faq/Faq';
import PageSectionCta from './Cta/Cta';
import {
  PageSectionReview,
  PageSectionReviewCreate,
  PageSectionReviewEdit,
} from './Review';
import { PageSections } from '@/src/constants/routes/sections';

export const pages = [
  {
    path: PageSections.ACHIVMENTS,
    element: <PageSectionAchivments />,
  },
  {
    path: PageSections.CONTACTS,
    element: <PageSectionContacts />,
  },
  {
    path: PageSections.FAQ,
    element: <PageSectionFaq />,
  },
  {
    path: PageSections.CTA,
    element: <PageSectionCta />,
  },
  {
    path: PageSections.REVIEW,
    element: <PageSectionReview />,
  },
  {
    path: `${PageSections.REVIEW_EDIT}/:id`,
    element: <PageSectionReviewEdit />,
  },
  {
    path: PageSections.REVIEW_CREATE,
    element: <PageSectionReviewCreate />,
  },
];
