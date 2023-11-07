import { Link } from 'react-router-dom';

import { Box } from '@mui/material';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';

import { StudentsList } from './components';

import { Links } from '@/src/constants/routes';

export default function Students() {
  return (
    <Box py={4} component="section">
      <Container className="fullwidth-container">
        <Box mb={2}>
          <Typography variant="h1">Students</Typography>
        </Box>
        <Box mb={4}>
          <Breadcrumbs aria-label="breadcrumb">
            <Link to={Links.ADMIN}>Home</Link>
            <Typography>Students</Typography>
          </Breadcrumbs>
        </Box>
        <StudentsList />
      </Container>
    </Box>
  );
}
