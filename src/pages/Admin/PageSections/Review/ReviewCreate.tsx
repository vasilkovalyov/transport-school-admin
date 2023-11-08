import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { Box } from '@mui/material';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';

import { ReviewFormDataType, ReviewForm } from './components';
import ServiceReview from './Review.service';
import { Dashboard } from '@/src/constants/routes/dashboard';
import { PageSections } from '@/src/constants/routes/sections';

const service = new ServiceReview();

export default function PageSectionReviewCreate() {
  const navigate = useNavigate();
  const [loadingSubmit, setLoadingSubmit] = useState<boolean>(false);

  async function onCreate(data: ReviewFormDataType) {
    try {
      setLoadingSubmit(true);
      await service.create(data);
      navigate(PageSections.REVIEW);
    } catch (e) {
      console.log(e);
    } finally {
      setLoadingSubmit(true);
    }
  }

  return (
    <Box py={4} component="section">
      <Container className="fullwidth-container">
        <Typography variant="h1">Create review</Typography>
        <Box mb={4}>
          <Breadcrumbs aria-label="breadcrumb">
            <Link to={Dashboard.ADMIN}>Home</Link>
            <Link to={PageSections.REVIEW}>Section review</Link>
            <Typography>Create review</Typography>
          </Breadcrumbs>
        </Box>
        <ReviewForm loadingSubmit={loadingSubmit} onSubmit={onCreate} />
      </Container>
    </Box>
  );
}
