import { Box } from '@mui/material';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import { ContactsFormProps } from './ContactsForm.type';
import { ReuseBlockTogglers } from '../ReuseBlockTogglers';

export default function ContactsForm({
  data,
  loadingType,
  onPublish,
  onCreate,
}: ContactsFormProps) {
  return (
    <Box component="form" maxWidth={800} marginBottom={4}>
      <ReuseBlockTogglers
        publish={data?.publish}
        loadingType={loadingType}
        showPublishButton={data !== null}
        onSubmit={() => onCreate && onCreate()}
        onPublish={onPublish}
      />
    </Box>
  );
}
