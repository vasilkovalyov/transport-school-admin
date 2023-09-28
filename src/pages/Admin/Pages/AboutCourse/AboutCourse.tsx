import { SectionsContentLayout } from 'src/layouts';

import { navigation } from './PageAboutCourse.data';

export default function PageAboutCourse() {
  return (
    <SectionsContentLayout
      heading="Page about course"
      navigation={navigation}
    ></SectionsContentLayout>
  );
}
