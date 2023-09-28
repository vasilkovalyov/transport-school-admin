import { LinksPageSections } from 'src/constants/routes';

import PageSectionAchivments from './Achivments/Achivments';
import PageSectionContacts from './Contacts/Contacts';
import PageSectionFaq from './Faq/Faq';
import PageSectionCta from './Cta/Cta';
import {
  PageSectionReview,
  PageSectionReviewCreate,
  PageSectionReviewEdit,
} from './Review';

export const pages = [
  {
    path: LinksPageSections.ACHIVMENTS,
    element: <PageSectionAchivments />,
  },
  {
    path: LinksPageSections.CONTACTS,
    element: <PageSectionContacts />,
  },
  {
    path: LinksPageSections.FAQ,
    element: <PageSectionFaq />,
  },
  {
    path: LinksPageSections.CTA,
    element: <PageSectionCta />,
  },
  {
    path: LinksPageSections.REVIEW,
    element: <PageSectionReview />,
  },
  {
    path: `${LinksPageSections.REVIEW_EDIT}/:id`,
    element: <PageSectionReviewEdit />,
  },
  {
    path: LinksPageSections.REVIEW_CREATE,
    element: <PageSectionReviewCreate />,
  },
];
