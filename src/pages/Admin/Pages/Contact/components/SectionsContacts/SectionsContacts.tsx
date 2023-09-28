import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';

import { ContactsForm } from '../../../Components';

export default function SectionContacts() {
  return (
    <Box>
      <Typography variant="h2">Section contacts</Typography>
      <ContactsForm />
    </Box>
  );
}