import { LinksPageContactSections } from 'src/constants/routes';

import Seo from './Seo/Seo';
import SectionsContacts from './SectionsContacts/SectionsContacts';
import SectionCta from './SectionCta/SectionCta';
import SectionContactForm from './SectionContactForm/SectionContactForm';

export const pages = [
  {
    path: LinksPageContactSections.SEO,
    element: <Seo />,
  },
  {
    path: LinksPageContactSections.CONTACTS,
    element: <SectionsContacts />,
  },
  {
    path: LinksPageContactSections.CTA,
    element: <SectionCta />,
  },
  {
    path: LinksPageContactSections.CONTACT_FORM,
    element: <SectionContactForm />,
  },
];
