import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';

import { BlockHeadingProps } from './BlockHeading.type';

export default function BlockHeading({
  heading,
  loading,
  publish,
}: BlockHeadingProps) {
  return (
    <Stack
      marginBottom={4}
      direction="row"
      spacing={2}
      justifyContent="space-between"
      alignItems="center"
    >
      <Typography variant="h2">{heading}</Typography>
      {loading ? (
        <Chip label="Loading" />
      ) : (
        <Chip
          label={publish ? 'Publish' : 'Not publish'}
          color={publish ? 'success' : 'error'}
        />
      )}
    </Stack>
  );
}
