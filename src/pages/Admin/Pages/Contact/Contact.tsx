import { SectionsContentLayout } from 'src/layouts';

import { navigation } from './Contact.data';

export default function PageContact() {
  return (
    <SectionsContentLayout
      heading="Page contact"
      navigation={navigation}
    ></SectionsContentLayout>
  );
}
