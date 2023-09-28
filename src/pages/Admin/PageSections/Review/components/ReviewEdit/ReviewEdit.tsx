import { Box } from '@mui/material';

import ReviewForm from '../ReviewForm/ReviewForm';

export default function ReviewEdit() {
  return (
    <Box component="section">
      <ReviewForm
        data={{
          image:
            'https://images.unsplash.com/photo-1695418624968-d027093abdb9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
          heading: 'Name',
          text: 'lorem ipsum',
          rating: 2,
        }}
        onSubmit={(data) => console.log(data)}
      />
    </Box>
  );
}
