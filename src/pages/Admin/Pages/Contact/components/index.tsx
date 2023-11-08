import Seo from './Seo/Seo';
import SectionsContacts from './SectionsContacts/SectionsContacts';
import SectionCta from './SectionCta/SectionCta';
import SectionContactForm from './SectionContactForm/SectionContactForm';
import { PageContactSections } from '@/src/constants/routes/pages';

export const pages = [
  {
    path: PageContactSections.SEO,
    element: <Seo />,
  },
  {
    path: PageContactSections.CONTACTS,
    element: <SectionsContacts />,
  },
  {
    path: PageContactSections.CTA,
    element: <SectionCta />,
  },
  {
    path: PageContactSections.CONTACT_FORM,
    element: <SectionContactForm />,
  },
];
