import { Link } from 'react-router-dom';

import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';

import { SectionsContentLayout } from 'src/layouts';

import { navigation } from './Home.data';
import { Links, LinksPages } from '@/src/constants/routes';

export default function PageHome() {
  return (
    <SectionsContentLayout heading="Page home" navigation={navigation}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link to={Links.ADMIN}>Home</Link>
        <Link to={LinksPages.HOME}>Pages</Link>
        <Typography>Home</Typography>
      </Breadcrumbs>
    </SectionsContentLayout>
  );
}
