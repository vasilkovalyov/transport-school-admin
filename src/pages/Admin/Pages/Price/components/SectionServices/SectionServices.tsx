import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';

import { ServicesForm } from '../../../Components';

export default function SectionServices() {
  return (
    <Box>
      <Typography variant="h2">Section services</Typography>
      <ServicesForm />
    </Box>
  );
}
