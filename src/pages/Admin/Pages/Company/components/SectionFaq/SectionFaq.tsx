import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';

import { FaqForm } from '@/src/pages/Admin/Pages/Components';

export default function SectionFaq() {
  return (
    <Box>
      <Typography variant="h2">Section faq</Typography>
      <FaqForm />
    </Box>
  );
}
