import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import Button from '@mui/material/Button';

import BlogForm from '../BlogForm/BlogForm';
import { BlockCardCreateProps, BlogCardProps } from '../BlogCard';
import PostService from '../../Blog.service';
import { LinksConcepts } from '@/src/constants/routes';

const service = new PostService();
const initialData: BlogCardProps = {
  _id: '',
  heading: '',
  rich_text: '',
  slug: '',
  short_description: '',
};

export default function BlockBlogEdit() {
  let { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState<BlogCardProps>(initialData);

  async function loadData() {
    try {
      const response = await service.getPost(id || '');
      setData(response.data);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    loadData();
  }, []);

  async function onUpdate(params: BlockCardCreateProps) {
    try {
      await service.update({
        ...params,
        _id: id || '',
      });
      navigate(LinksConcepts.BLOG);
    } catch (e) {
      console.log(e);
    }
  }

  async function handleDelete() {
    try {
      await service.delete(id || '');
      navigate(LinksConcepts.BLOG);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <Box component="section">
      <BlogForm data={data} onSubmit={onUpdate} />
      <Box>
        <Button
          variant="contained"
          size="medium"
          color="error"
          onClick={handleDelete}
        >
          Delete
        </Button>
      </Box>
    </Box>
  );
}
