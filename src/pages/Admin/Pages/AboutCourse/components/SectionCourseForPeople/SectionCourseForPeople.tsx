import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';

import { CourseForPeopleForm } from '../../../Components';

export default function SectionCourseForPeople() {
  return (
    <Box>
      <Typography variant="h2">Section course for people</Typography>
      <CourseForPeopleForm />
    </Box>
  );
}
