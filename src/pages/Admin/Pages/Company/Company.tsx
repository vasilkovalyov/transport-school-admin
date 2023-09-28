import { SectionsContentLayout } from 'src/layouts';

import { navigation } from './Company.data';

export default function PageCompany() {
  return (
    <SectionsContentLayout
      heading="Page company"
      navigation={navigation}
    ></SectionsContentLayout>
  );
}
