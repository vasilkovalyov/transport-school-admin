import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import LinearProgress from '@mui/material/LinearProgress';

import LessonForm from '../LessonForm/LessonForm';
import LessonScheduleService from '../../LessonSchedule.service';

import { Concepts } from '@/src/constants/routes/concepts';
import { AlertMessageModal, useAlertMessageModal } from '@/src/components';
import { LessonEditProps } from '@/src/types/lesson';

const service = new LessonScheduleService();

const initialData: LessonEditProps = {
  heading: '',
  type_group: '',
  type_lesson: '',
  time_start: '',
  time_end: '',
  date_start_event: '',
  max_people: 0,
};

export default function BlockEditLesson() {
  let { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<LessonEditProps>(initialData);
  const [loadingRemove, setLoadingRemove] = useState<boolean>(false);
  const { openModal, onCloseModal, onOpenModal } = useAlertMessageModal();

  async function loadData() {
    try {
      setLoading(true);
      const response = await service.getPost(id || '');
      if (response.data === null) {
        navigate(Concepts.LESSON_SCHEDULE);
      }
      setData(response.data);
    } catch (e) {
      navigate(Concepts.LESSON_SCHEDULE);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadData();
  }, []);

  async function onUpdate(params: LessonEditProps) {
    try {
      await service.update({
        ...params,
        _id: id || '',
      });
      navigate(Concepts.LESSON_SCHEDULE);
    } catch (e) {
      console.log(e);
    }
  }

  async function onDeleteLesson() {
    try {
      setLoadingRemove(true);
      await service.delete(id || '');
      navigate(Concepts.LESSON_SCHEDULE);
    } catch (e) {
      console.log(e);
    } finally {
      setLoadingRemove(false);
      onCloseModal();
    }
  }

  return (
    <Box component="section">
      {loading ? (
        <Box pb={4}>
          <LinearProgress />
        </Box>
      ) : null}
      <LessonForm data={data} onSubmit={onUpdate} />
      <Box>
        <Button
          variant="contained"
          size="medium"
          color="error"
          onClick={() => {
            if (id) {
              onOpenModal(id);
            }
          }}
        >
          Delete
        </Button>
      </Box>
      <AlertMessageModal
        open={openModal}
        loading={loadingRemove}
        title="Do you want to remove lesson?"
        handleAgree={onDeleteLesson}
        handleClose={onCloseModal}
      />
    </Box>
  );
}
