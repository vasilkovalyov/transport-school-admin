import { SectionsContentLayout } from 'src/layouts';

import { navigation } from './Blog.data';

export default function PageBlog() {
  return (
    <SectionsContentLayout
      heading="Page blog"
      navigation={navigation}
    ></SectionsContentLayout>
  );
}
