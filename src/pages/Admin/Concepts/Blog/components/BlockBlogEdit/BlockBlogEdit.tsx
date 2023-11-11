import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import LinearProgress from '@mui/material/LinearProgress';
import { AlertMessageModal, useAlertMessageModal } from '@/src/components';

import BlogForm from '../BlogForm/BlogForm';
import { BlockCardEditableProps, BlogCardProps } from '../BlogCard';
import PostService from '../../Blog.service';
import { Concepts } from '@/src/constants/routes/concepts';
import dayjs from 'dayjs';

const service = new PostService();
const initialData: BlogCardProps = {
  _id: '',
  heading: '',
  rich_text: '',
  slug: '',
  short_description: '',
};

type LoadingType = 'loading' | 'loadingRemove' | 'loadingUpdate';

export default function BlockBlogEdit() {
  let { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState<LoadingType | null>('loading');
  const [data, setData] = useState<BlogCardProps>(initialData);
  const { selectedId, openModal, onCloseModal, onOpenModal } =
    useAlertMessageModal();

  async function loadData() {
    if (!id) return;
    try {
      setLoading('loading');
      const response = await service.getPost(id);
      if (response.data === null) {
        navigate(Concepts.BLOG);
      }
      setData(response.data);
    } catch (e) {
    } finally {
      setLoading(null);
    }
  }

  useEffect(() => {
    loadData();
  }, []);

  async function onDeleteBlog() {
    if (!selectedId) return null;
    try {
      setLoading('loadingRemove');
      await service.delete(selectedId);
      navigate(Concepts.BLOG);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(null);
      onCloseModal();
    }
  }

  async function onPostUpdate(params: BlockCardEditableProps) {
    try {
      setLoading('loadingUpdate');
      await service.update({
        ...params,
        _id: id || '',
      });
      navigate(Concepts.BLOG);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(null);
    }
  }

  return (
    <Box component="section">
      {loading === 'loading' ? (
        <Box pb={4}>
          <LinearProgress />
        </Box>
      ) : null}
      <Typography variant="body2">
        Date post - {dayjs(data.createdAt).format('HH:MM | DD MMM YYYY')}
      </Typography>
      <BlogForm
        data={data}
        loading={loading === 'loadingUpdate'}
        onSubmit={onPostUpdate}
      />
      <Box>
        <Button
          variant="contained"
          size="medium"
          color="error"
          onClick={() => onOpenModal(data._id)}
        >
          Delete
        </Button>
      </Box>
      <AlertMessageModal
        open={openModal}
        loading={loading === 'loadingUpdate'}
        title="Do you want to remove blog?"
        handleAgree={onDeleteBlog}
        handleClose={onCloseModal}
      />
    </Box>
  );
}
