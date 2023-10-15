import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';

import BlogForm from '../BlogForm/BlogForm';
import { BlockCardEditableProps, BlogCardProps } from '../BlogCard';
import PostService from '../../Blog.service';
import { LinksConcepts } from '@/src/constants/routes';
import dayjs from 'dayjs';

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
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<BlogCardProps>(initialData);

  async function loadData() {
    try {
      setLoading(true);
      const response = await service.getPost(id || '');
      if (response.data === null) {
        navigate(LinksConcepts.BLOG);
      }
      setData(response.data);
    } catch (e) {
      navigate(LinksConcepts.BLOG);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadData();
  }, []);

  async function onUpdate(params: BlockCardEditableProps) {
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

  if (loading) {
    return (
      <Box py={4} sx={{ display: 'flex', justifyContent: 'center' }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box component="section">
      <Typography variant="body2">
        Date post - {dayjs(data.createdAt).format('HH:MM | DD MMM YYYY')}
      </Typography>
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
