import { Box } from '@mui/material';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import { FaqFormProps } from './FaqForm.type';

export default function FaqForm({ data, onPublish }: FaqFormProps) {
  return (
    <Box component="form" maxWidth={800} marginBottom={4}>
      <Stack spacing={2} direction="row">
        <Button
          variant="contained"
          size="medium"
          color={data?.publish ? 'info' : 'warning'}
          onClick={() => onPublish && onPublish(!data?.publish)}
        >
          {data?.publish ? 'Unpublish' : 'Publish'}
        </Button>
      </Stack>
    </Box>
  );
}
