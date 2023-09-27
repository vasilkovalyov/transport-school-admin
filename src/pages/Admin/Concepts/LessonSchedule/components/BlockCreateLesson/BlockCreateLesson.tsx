import { Box } from '@mui/material';

import LessonForm from '../LessonForm/LessonForm';

export default function BlockCreateLesson() {
  return (
    <Box component="section">
      <LessonForm onSubmit={(data) => console.log(data)} />
    </Box>
  );
}
