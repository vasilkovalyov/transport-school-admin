import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { Box } from '@mui/material';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';

import { Links, LinksPageSections } from '@/src/constants/routes';
import { ReviewFormDataType, ReviewForm } from './components';
import ServiceReview from './Review.service';

const service = new ServiceReview();

export default function PageSectionReviewCreate() {
  const navigate = useNavigate();
  const [loadingSubmit, setLoadingSubmit] = useState<boolean>(false);

  async function onCreate(data: ReviewFormDataType) {
    try {
      setLoadingSubmit(true);
      await service.create(data);
      navigate(LinksPageSections.REVIEW);
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
            <Link to={Links.ADMIN}>Home</Link>
            <Link to={LinksPageSections.REVIEW}>Section review</Link>
            <Typography>Create review</Typography>
          </Breadcrumbs>
        </Box>
        <ReviewForm loadingSubmit={loadingSubmit} onSubmit={onCreate} />
      </Container>
    </Box>
  );
}
