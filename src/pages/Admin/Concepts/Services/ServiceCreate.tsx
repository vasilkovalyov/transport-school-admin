import { Link } from 'react-router-dom';

import { Box } from '@mui/material';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';

import { Concepts } from '@/src/constants/routes/concepts';
import { Dashboard } from '@/src/constants/routes/dashboard';
import { BlockServiceCreate } from './components';

export default function ServiceCreate() {
  return (
    <Box py={4} component="section">
      <Container className="fullwidth-container">
        <Typography variant="h1">Create service</Typography>
        <Box mb={4}>
          <Breadcrumbs aria-label="breadcrumb">
            <Link to={Dashboard.ADMIN}>Home</Link>
            <Link to={Concepts.SERVICES}>Service</Link>
            <Typography>Create service</Typography>
          </Breadcrumbs>
        </Box>
        <BlockServiceCreate />
      </Container>
    </Box>
  );
}
