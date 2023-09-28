import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';

import { AboutForm } from '../../../Components';

export default function SectionAbout() {
  return (
    <Box>
      <Typography variant="h2">Section about</Typography>
      <AboutForm />
    </Box>
  );
}
