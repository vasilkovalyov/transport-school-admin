import { Link } from 'react-router-dom';

import { Box } from '@mui/material';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';

import { Links, LinksPageSections } from '@/src/constants/routes';
import { ReviewCreate } from './components';

export default function PageSectionReviewCreate() {
  return (
    <Box py={4} component="section">
      <Container className="fullwidth-container">
        <Typography variant="h1">Create review</Typography>
        <Box mb={4}>
          <Breadcrumbs aria-label="breadcrumb">
            <Link to={Links.ADMIN}>Home</Link>
            <Link to={LinksPageSections.REVIEW}>Section review</Link>
            <Typography>Create review</Typography>
          </Breadcrumbs>
        </Box>
        <ReviewCreate />
      </Container>
    </Box>
  );
}
