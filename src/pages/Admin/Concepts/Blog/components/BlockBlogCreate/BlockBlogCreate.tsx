import { useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';

import BlogForm from '../BlogForm/BlogForm';
import { BlockCardEditableProps } from '../BlogCard';
import PostService from '../../Blog.service';
import { LinksConcepts } from '@/src/constants/routes';

const service = new PostService();

export default function BlockBlogCreate() {
  const navigate = useNavigate();

  async function onCreate(params: BlockCardEditableProps) {
    try {
      await service.create(params);
      navigate(LinksConcepts.BLOG);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <Box component="section">
      <BlogForm onSubmit={onCreate} />
    </Box>
  );
}
