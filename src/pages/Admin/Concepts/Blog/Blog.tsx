import { Link, useNavigate } from 'react-router-dom';

import { Box } from '@mui/material';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';

import { BlogList } from './components';

import { Links } from '@/src/constants/routes';

export default function Blog() {
  const navigate = useNavigate();

  return (
    <Box py={4} component="section">
      <Container className="fullwidth-container">
        <Grid container justifyContent="space-between" columnSpacing={4} mb={2}>
          <Grid item>
            <Typography variant="h1">Blog</Typography>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              size="small"
              onClick={() => {
                navigate(Links.ADMIN_BLOG_CREATE);
              }}
            >
              Create Blog
            </Button>
          </Grid>
        </Grid>
        <Box mb={4}>
          <Breadcrumbs aria-label="breadcrumb">
            <Link to={Links.ADMIN}>Home</Link>
            <Typography>Blog</Typography>
          </Breadcrumbs>
        </Box>
        <BlogList />
      </Container>
    </Box>
  );
}
