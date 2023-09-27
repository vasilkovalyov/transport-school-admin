import { Box } from '@mui/material';

import ReviewForm from '../ReviewForm/ReviewForm';

export default function ReviewEdit() {
  return (
    <Box component="section">
      <ReviewForm
        data={{
          heading: 'Name',
          text: 'lorem ipsum',
          rating: 2,
        }}
        onSubmit={(data) => console.log(data)}
      />
    </Box>
  );
}
