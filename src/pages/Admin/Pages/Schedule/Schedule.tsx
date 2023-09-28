import { SectionsContentLayout } from 'src/layouts';

import { navigation } from './Schedule.data';

export default function PageSchedule() {
  return (
    <SectionsContentLayout
      heading="Page schedule"
      navigation={navigation}
    ></SectionsContentLayout>
  );
}
