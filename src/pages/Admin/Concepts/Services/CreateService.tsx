import { Link } from 'react-router-dom';

import { Box } from '@mui/material';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';

import { Links } from '@/src/constants/routes';
import { BlockCreateService } from './components';

export default function CreateService() {
  return (
    <Box py={4} component="section">
      <Container className="fullwidth-container">
        <Typography variant="h1">Create service</Typography>
        <Box mb={4}>
          <Breadcrumbs aria-label="breadcrumb">
            <Link to={Links.ADMIN}>Home</Link>
            <Link to={Links.ADMIN_SERVICES}>Service</Link>
            <Typography>Create service</Typography>
          </Breadcrumbs>
        </Box>
        <BlockCreateService />
      </Container>
    </Box>
  );
}
