import { Link } from 'react-router-dom';

import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';

import { SectionsContentLayout } from 'src/layouts';

import { navigation } from './Schedule.data';
import { Dashboard } from '@/src/constants/routes/dashboard';
import { Pages } from '@/src/constants/routes/pages';

export default function PageSchedule() {
  return (
    <SectionsContentLayout heading="Page schedule" navigation={navigation}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link to={Dashboard.ADMIN}>Home</Link>
        <Link to={Pages.HOME}>Pages</Link>
        <Typography>Schedule</Typography>
      </Breadcrumbs>
    </SectionsContentLayout>
  );
}
