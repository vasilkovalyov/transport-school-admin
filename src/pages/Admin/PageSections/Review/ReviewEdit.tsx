import { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

import { Box } from '@mui/material';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import LinearProgress from '@mui/material/LinearProgress';

import { ReviewType, ReviewFormDataType, ReviewForm } from './components';
import ServiceReview from './Review.service';
import { PageSections } from '@/src/constants/routes/sections';
import { Dashboard } from '@/src/constants/routes/dashboard';

const service = new ServiceReview();

export default function PageSectionReviewEdit() {
  let { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(true);
  const [loadingSubmit, setLoadingSubmit] = useState<boolean>(false);
  const [review, setReview] = useState<ReviewType>();

  async function loadData() {
    try {
      setLoading(true);
      const response = await service.getPost(id || '');
      setReview(response.data);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadData();
  }, []);

  async function onUpdate(data: ReviewFormDataType) {
    try {
      setLoadingSubmit(true);
      await service.update({
        ...data,
        _id: id as string,
      });
      navigate(PageSections.REVIEW);
    } catch (e) {
      console.log(e);
    } finally {
      setLoadingSubmit(false);
    }
  }

  return (
    <Box py={4} component="section">
      <Container className="fullwidth-container">
        <Typography variant="h1">Edit review</Typography>
        <Box mb={4}>
          <Breadcrumbs aria-label="breadcrumb">
            <Link to={Dashboard.ADMIN}>Home</Link>
            <Link to={PageSections.REVIEW}>Section review</Link>
            <Typography>Edit review</Typography>
          </Breadcrumbs>
        </Box>
        {loading ? (
          <Box mb={4}>
            <LinearProgress />
          </Box>
        ) : null}
        <ReviewForm
          data={review}
          loadingSubmit={loadingSubmit}
          onSubmit={onUpdate}
        />
      </Container>
    </Box>
  );
}
