import { SectionsContentLayout } from 'src/layouts';

import { navigation } from './Price.data';

export default function PagePrice() {
  return (
    <SectionsContentLayout
      heading="Page price"
      navigation={navigation}
    ></SectionsContentLayout>
  );
}
