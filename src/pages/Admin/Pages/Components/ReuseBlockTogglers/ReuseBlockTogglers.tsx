import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';

import { ReuseBlockTogglersProps } from './ReuseBlockTogglers.type';

export default function ReuseBlockTogglers({
  publish = false,
  loadingType,
  showPublishButton = false,
  onSubmit,
  onPublish,
}: ReuseBlockTogglersProps) {
  return (
    <Stack spacing={2} direction="row">
      {!showPublishButton ? (
        <Stack spacing={2} direction="row" alignItems="center">
          <Button
            variant="contained"
            size="medium"
            color="success"
            disabled={loadingType === 'update'}
            onClick={onSubmit}
          >
            Create
          </Button>
          {loadingType === 'update' ? <CircularProgress size={20} /> : null}
        </Stack>
      ) : null}
      {showPublishButton ? (
        <Stack spacing={2} direction="row" alignItems="center">
          <Button
            variant="contained"
            size="medium"
            color={publish ? 'info' : 'warning'}
            disabled={loadingType === 'publish'}
            onClick={() => onPublish && onPublish(!publish)}
          >
            {publish ? 'Unpublish' : 'Publish'}
          </Button>
          {loadingType === 'publish' ? <CircularProgress size={20} /> : null}
        </Stack>
      ) : null}
    </Stack>
  );
}
