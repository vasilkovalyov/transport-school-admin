import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';

import { FormatLessonsForm } from '../../../Components';

export default function SectionFormatLessons() {
  return (
    <Box>
      <Typography variant="h2">Section format lessons</Typography>
      <FormatLessonsForm />
    </Box>
  );
}
