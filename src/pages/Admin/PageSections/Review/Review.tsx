import { Link, useNavigate } from 'react-router-dom';

import { Box } from '@mui/material';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';

import { ReviewList, ReviewContentForm } from './components';
import { Dashboard } from '@/src/constants/routes/dashboard';
import { PageSections } from '@/src/constants/routes/sections';

export default function PageSectionReview() {
  const navigate = useNavigate();

  return (
    <Box py={4} component="section">
      <Container className="fullwidth-container">
        <Grid container justifyContent="space-between" columnSpacing={4} mb={2}>
          <Grid item>
            <Typography variant="h1">Review</Typography>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              size="small"
              onClick={() => {
                navigate(PageSections.REVIEW_CREATE);
              }}
            >
              Create Review
            </Button>
          </Grid>
        </Grid>
        <Box mb={4}>
          <Breadcrumbs aria-label="breadcrumb">
            <Link to={Dashboard.ADMIN}>Home</Link>
            <Typography>Section Review</Typography>
          </Breadcrumbs>
        </Box>
        <ReviewContentForm />
        <ReviewList />
      </Container>
    </Box>
  );
}
