import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';

import { ScheduleForm } from '../../../Components';

export default function SectionSchedule() {
  return (
    <Box>
      <Typography variant="h2">Section schedule</Typography>
      <ScheduleForm />
    </Box>
  );
}
