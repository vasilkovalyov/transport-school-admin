import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';

import { BlockTogglersProps } from './BlockTogglers.type';

export default function BlockTogglers({
  typeToggle,
  publish = false,
  loadingType,
  showPublishButton = false,
  onSubmit,
  onPublish,
}: BlockTogglersProps) {
  return (
    <Stack spacing={2} direction="row">
      <Stack spacing={2} direction="row" alignItems="center">
        <Button
          variant="contained"
          size="medium"
          color="success"
          disabled={loadingType === 'update'}
          onClick={onSubmit}
        >
          {typeToggle === 'update' ? 'Update' : null}
          {typeToggle === 'create' ? 'Create' : null}
        </Button>
        {loadingType === 'update' ? <CircularProgress size={20} /> : null}
      </Stack>
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
