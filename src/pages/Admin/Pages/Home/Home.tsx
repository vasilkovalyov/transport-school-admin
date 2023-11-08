import { Link } from 'react-router-dom';

import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';

import { SectionsContentLayout } from 'src/layouts';

import { navigation } from './Home.data';
import { Dashboard } from '@/src/constants/routes/dashboard';
import { Pages } from '@/src/constants/routes/pages';

export default function PageHome() {
  return (
    <SectionsContentLayout heading="Page home" navigation={navigation}>
      <Box mb={4}>
        <Breadcrumbs aria-label="breadcrumb">
          <Link to={Dashboard.ADMIN}>Home</Link>
          <Link to={Pages.HOME}>Pages</Link>
          <Typography>Home</Typography>
        </Breadcrumbs>
      </Box>
    </SectionsContentLayout>
  );
}
