import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';

import { CtaForm } from '@/src/pages/Admin/Pages/Components';

export default function SectionCta() {
  return (
    <Box>
      <Typography variant="h2">Section cta</Typography>
      <CtaForm />
    </Box>
  );
}
