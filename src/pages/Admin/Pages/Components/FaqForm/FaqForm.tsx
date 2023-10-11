import { Box } from '@mui/material';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import { FaqFormProps } from './FaqForm.type';

export default function FaqForm({ data, onPublish, onCreate }: FaqFormProps) {
  function handleSave() {
    onCreate && onCreate();
  }

  return (
    <Box component="form" maxWidth={800} marginBottom={4}>
      <Stack spacing={2} direction="row">
        {!data ? (
          <Button
            variant="contained"
            size="medium"
            color="success"
            onClick={handleSave}
          >
            Create
          </Button>
        ) : null}
        {data ? (
          <Button
            variant="contained"
            size="medium"
            color={data?.publish ? 'info' : 'warning'}
            onClick={() => onPublish && onPublish(!data?.publish)}
          >
            {data?.publish ? 'Unpublish' : 'Publish'}
          </Button>
        ) : null}
      </Stack>
    </Box>
  );
}
