import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';

import { AboutUsForm } from '../../../Components';

export default function SectionAboutUs() {
  return (
    <Box>
      <Typography variant="h2">Section about us</Typography>
      <AboutUsForm />
    </Box>
  );
}
