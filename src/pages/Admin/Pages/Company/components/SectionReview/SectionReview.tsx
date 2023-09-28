import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';

import { ReviewForm } from '../../../Components';

export default function SectionReview() {
  return (
    <Box>
      <Typography variant="h2">Section reviews</Typography>
      <ReviewForm />
    </Box>
  );
}
