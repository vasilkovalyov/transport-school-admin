import { Link } from 'react-router-dom';

import { Box } from '@mui/material';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';

import { Links } from '@/src/constants/routes';
import { BlockCreateBlog } from './components';

export default function CreateBlog() {
  return (
    <Box py={4} component="section">
      <Container className="fullwidth-container">
        <Typography variant="h1">Create Blog</Typography>
        <Box mb={4}>
          <Breadcrumbs aria-label="breadcrumb">
            <Link to={Links.ADMIN}>Home</Link>
            <Link to={Links.ADMIN_BLOG}>Blog</Link>
            <Typography>Create Blog</Typography>
          </Breadcrumbs>
        </Box>
        <BlockCreateBlog />
      </Container>
    </Box>
  );
}
