import { SectionsContentLayout } from 'src/layouts';

import { navigation } from './Home.data';

export default function PageHome() {
  return (
    <SectionsContentLayout
      heading="Page home"
      navigation={navigation}
    ></SectionsContentLayout>
  );
}
