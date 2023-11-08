import Seo from './Seo/Seo';
import SectionHero from './SectionHero/SectionHero';
import SectionBlog from './SectionBlog/SectionBlog';
import SectionCta from './SectionCta/SectionCta';
import { PageBlogSections } from '@/src/constants/routes/pages';

export const pages = [
  {
    path: PageBlogSections.SEO,
    element: <Seo />,
  },
  {
    path: PageBlogSections.HERO,
    element: <SectionHero />,
  },
  {
    path: PageBlogSections.BLOG,
    element: <SectionBlog />,
  },
  {
    path: PageBlogSections.CTA,
    element: <SectionCta />,
  },
];
