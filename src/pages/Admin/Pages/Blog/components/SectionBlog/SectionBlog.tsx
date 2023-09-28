import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';

import { BlogForm } from '../../../Components';

export default function SectionBlog() {
  return (
    <Box>
      <Typography variant="h2">Section blog</Typography>
      <BlogForm />
    </Box>
  );
}
