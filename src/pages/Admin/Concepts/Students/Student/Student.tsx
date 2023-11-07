import { Link } from 'react-router-dom';

import { Box } from '@mui/material';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';

import { Links, LinksConcepts } from '@/src/constants/routes';

export default function Student() {
  return (
    <Box py={4} component="section">
      <Container className="fullwidth-container">
        <Typography variant="h1">Student</Typography>
        <Box mb={4}>
          <Breadcrumbs aria-label="breadcrumb">
            <Link to={Links.ADMIN}>Home</Link>
            <Link to={LinksConcepts.STUDENTS}>Students</Link>
            <Typography>Student</Typography>
          </Breadcrumbs>
        </Box>
      </Container>
    </Box>
  );
}
