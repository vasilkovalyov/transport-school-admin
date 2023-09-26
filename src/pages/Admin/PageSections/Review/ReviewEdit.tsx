import { Link } from 'react-router-dom';

import { Box } from '@mui/material';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';

import { Links } from '@/src/constants/routes';

export default function PageSectionReviewEdit() {
  return (
    <Box py={4} component="section">
      <Container className="fullwidth-container">
        <Typography variant="h1">Edit review</Typography>
        <Breadcrumbs aria-label="breadcrumb">
          <Link to={Links.ADMIN}>Home</Link>
          <Link to={Links.ADMIN_PAGE_SECTION_REVIEW}>Section review</Link>
          <Typography>Edit review</Typography>
        </Breadcrumbs>
      </Container>
    </Box>
  );
}
