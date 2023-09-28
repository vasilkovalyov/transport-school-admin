import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';

import { ContactForm } from '../../../Components';

export default function SectionContactForm() {
  return (
    <Box>
      <Typography variant="h2">Section contact form</Typography>
      <ContactForm />
    </Box>
  );
}
