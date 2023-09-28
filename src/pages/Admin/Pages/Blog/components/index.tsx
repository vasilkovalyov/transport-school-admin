import { LinksPageBlogSections } from 'src/constants/routes';

import SectionHero from './SectionHero/SectionHero';
import SectionBlog from './SectionBlog/SectionBlog';
import SectionCta from './SectionCta/SectionCta';

export const pages = [
  {
    path: LinksPageBlogSections.HERO,
    element: <SectionHero />,
  },
  {
    path: LinksPageBlogSections.BLOG,
    element: <SectionBlog />,
  },
  {
    path: LinksPageBlogSections.CTA,
    element: <SectionCta />,
  },
];