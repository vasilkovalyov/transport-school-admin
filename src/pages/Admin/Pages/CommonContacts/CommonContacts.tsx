import { Link } from 'react-router-dom';

import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';

import { FormContacts, SocialForm } from './components';

import { Dashboard } from '@/src/constants/routes/dashboard';
import { Pages } from '@/src/constants/routes/pages';

export default function PageCommonContacts() {
  return (
    <Box py={4} component="section">
      <Container className="fullwidth-container">
        <Typography variant="h1" marginBottom={2}>
          Page common contacts
        </Typography>
        <Box marginBottom={4}>
          <Breadcrumbs aria-label="breadcrumb">
            <Link to={Dashboard.ADMIN}>Home</Link>
            <Link to={Pages.HOME}>Pages</Link>
            <Typography>Schedule</Typography>
          </Breadcrumbs>
        </Box>
        <Box marginBottom={4}>
          <Divider />
        </Box>
        <FormContacts />
        <Box marginBottom={4}>
          <Divider />
        </Box>
        <SocialForm />
      </Container>
    </Box>
  );
}
