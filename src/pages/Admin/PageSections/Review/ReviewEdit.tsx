import { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

import { Box } from '@mui/material';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';

import { Links, LinksPageSections } from '@/src/constants/routes';
import { IReview, IReviewFormData, ReviewForm } from './components';
import ServiceReview from './Review.service';

const service = new ServiceReview();

export default function PageSectionReviewEdit() {
  let { id } = useParams();
  const navigate = useNavigate();
  const [review, setReview] = useState<IReview>();

  async function loadData() {
    const response = await service.getPost(id || '');
    setReview(response.data);
  }

  useEffect(() => {
    loadData();
  }, []);

  async function onUpdate(data: IReviewFormData) {
    try {
      await service.update({
        ...data,
        _id: id as string,
      });
      navigate(LinksPageSections.REVIEW);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <Box py={4} component="section">
      <Container className="fullwidth-container">
        <Typography variant="h1">Edit review</Typography>
        <Box mb={4}>
          <Breadcrumbs aria-label="breadcrumb">
            <Link to={Links.ADMIN}>Home</Link>
            <Link to={LinksPageSections.REVIEW}>Section review</Link>
            <Typography>Edit review</Typography>
          </Breadcrumbs>
        </Box>
        <ReviewForm data={review} onSubmit={onUpdate} />
      </Container>
    </Box>
  );
}
