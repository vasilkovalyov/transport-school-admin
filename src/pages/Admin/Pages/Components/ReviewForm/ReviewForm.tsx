import { Box } from '@mui/material';

import { ReviewFormProps } from './ReviewForm.type';
import { ReuseBlockTogglers } from '../ReuseBlockTogglers';
import { isPublishBlockButton } from '../utils/common';

export default function ReviewForm({
  data,
  loadingType,
  onPublish,
  onCreate,
}: ReviewFormProps) {
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
