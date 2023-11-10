import { useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';

import LessonForm from '../LessonForm/LessonForm';
import LessonScheduleService from '../../LessonSchedule.service';

import { Concepts } from '@/src/constants/routes/concepts';
import { LessonEditProps } from '@/src/types/lesson';

const service = new LessonScheduleService();

export default function BlockCreateLesson() {
  const navigate = useNavigate();

  async function onCreate(params: LessonEditProps) {
    try {
      await service.create(params);
      navigate(Concepts.LESSON_SCHEDULE);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <Box component="section">
      <LessonForm onSubmit={onCreate} />
    </Box>
  );
}
