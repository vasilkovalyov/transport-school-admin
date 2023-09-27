import { Box } from '@mui/material';

import LessonForm from '../LessonForm/LessonForm';

export default function BlockEditLesson() {
  return (
    <Box component="section">
      <LessonForm
        data={{
          heading: 'Test',
          time_end: '10:00',
          time_start: '08:00',
          type_group: 'midday',
          type_lesson: 'offline',
          date_end: '2024-04-23',
          day_start: 0,
          day_end: 4,
        }}
        onSubmit={(data) => console.log(data)}
      />
    </Box>
  );
}
