import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';

import { RequirementForm } from '../../../Components';

export default function SectionRequirement() {
  return (
    <Box>
      <Typography variant="h2">Section requirement</Typography>
      <RequirementForm />
    </Box>
  );
}
