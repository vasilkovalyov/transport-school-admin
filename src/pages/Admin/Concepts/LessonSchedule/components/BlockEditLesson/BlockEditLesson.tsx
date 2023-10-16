import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';

import LessonForm from '../LessonForm/LessonForm';
import LessonScheduleService from '../../LessonSchedule.service';
import { LessonScheduleEditableProps } from '../LessonRow';
import { LinksConcepts } from '@/src/constants/routes';

const service = new LessonScheduleService();
const initialData: LessonScheduleEditableProps = {
  heading: '',
  type_group: '',
  type_lesson: '',
  time_start: '',
  time_end: '',
  day_start: '',
  day_end: '',
  date_start_event: '',
};

export default function BlockEditLesson() {
  let { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<LessonScheduleEditableProps>(initialData);

  async function loadData() {
    try {
      setLoading(true);
      const response = await service.getPost(id || '');
      if (response.data === null) {
        navigate(LinksConcepts.LESSON_SCHEDULE);
      }
      setData(response.data);
    } catch (e) {
      navigate(LinksConcepts.LESSON_SCHEDULE);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadData();
  }, []);

  async function onUpdate(params: LessonScheduleEditableProps) {
    try {
      await service.update({
        ...params,
        _id: id || '',
      });
      navigate(LinksConcepts.LESSON_SCHEDULE);
    } catch (e) {
      console.log(e);
    }
  }

  async function handleDelete() {
    try {
      await service.delete(id || '');
      navigate(LinksConcepts.LESSON_SCHEDULE);
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
      <LessonForm data={data} onSubmit={onUpdate} />
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
