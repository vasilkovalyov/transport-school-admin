import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';

import { AboutCourseForm } from '../../../Components';

export default function SectionAboutCourse() {
  return (
    <Box>
      <Typography variant="h2">Section about course</Typography>
      <AboutCourseForm />
    </Box>
  );
}
