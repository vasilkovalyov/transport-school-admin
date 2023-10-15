import { useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';

import LessonForm from '../LessonForm/LessonForm';
import LessonScheduleService from '../../LessonSchedule.service';
import { LessonScheduleEditableProps } from '../LessonRow';
import { LinksConcepts } from '@/src/constants/routes';

const service = new LessonScheduleService();

export default function BlockCreateLesson() {
  const navigate = useNavigate();

  async function onCreate(params: LessonScheduleEditableProps) {
    try {
      await service.create(params);
      navigate(LinksConcepts.LESSON_SCHEDULE);
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
