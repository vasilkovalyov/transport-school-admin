import { Link } from 'react-router-dom';

import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';

import { SectionsContentLayout } from 'src/layouts';

import { navigation } from './PageAboutCourse.data';
import { Dashboard } from '@/src/constants/routes/dashboard';
import { Pages } from '@/src/constants/routes/pages';

export default function PageAboutCourse() {
  return (
    <SectionsContentLayout heading="Page about course" navigation={navigation}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link to={Dashboard.ADMIN}>Home</Link>
        <Link to={Pages.HOME}>Pages</Link>
        <Typography>About course</Typography>
      </Breadcrumbs>
    </SectionsContentLayout>
  );
}
