import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';

import { AchivmentsForm } from '@/src/pages/Admin/Pages/Components';

export default function SectionAchivments() {
  return (
    <Box>
      <Typography variant="h2">Section achivments</Typography>
      <AchivmentsForm />
    </Box>
  );
}
