import { Box } from '@mui/material';

import { FaqFormProps } from './FaqForm.type';
import { ReuseBlockTogglers } from '../ReuseBlockTogglers';
import { isPublishBlockButton } from '../utils/common';

export default function FaqForm({
  data,
  loadingType,
  onPublish,
  onCreate,
}: FaqFormProps) {
  return (
    <Box component="form" maxWidth={800} marginBottom={4}>
      <ReuseBlockTogglers
        publish={data?.publish}
        loadingType={loadingType}
        showPublishButton={isPublishBlockButton(data?.publish ?? null)}
        onSubmit={() => onCreate && onCreate()}
        onPublish={onPublish}
      />
    </Box>
  );
}
