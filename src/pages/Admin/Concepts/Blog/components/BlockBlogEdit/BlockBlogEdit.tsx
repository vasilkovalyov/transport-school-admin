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
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<BlogCardProps>(initialData);
  const [loadingRemove, setLoadingRemove] = useState<boolean>(false);
  const { selectedId, openModal, onCloseModal, onOpenModal } =
    useAlertMessageModal();

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

  async function onDeleteBlog() {
    if (!selectedId) return null;
    try {
      setLoadingRemove(true);
      await service.delete(selectedId);
      navigate(LinksConcepts.BLOG);
    } catch (e) {
      console.log(e);
    } finally {
      setLoadingRemove(false);
      onCloseModal();
    }
  }

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

  return (
    <Box component="section">
      {loading ? (
        <Box pb={4}>
          <LinearProgress />
        </Box>
      ) : null}
      <Typography variant="body2">
        Date post - {dayjs(data.createdAt).format('HH:MM | DD MMM YYYY')}
      </Typography>
      <BlogForm data={data} onSubmit={onUpdate} />
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
        loading={loadingRemove}
        title="Do you want to remove blog?"
        handleAgree={onDeleteBlog}
        handleClose={onCloseModal}
      />
    </Box>
  );
}
