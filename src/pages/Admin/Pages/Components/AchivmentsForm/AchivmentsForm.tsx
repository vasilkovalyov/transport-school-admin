import { Box } from '@mui/material';
import { ReuseBlockTogglers } from '../ReuseBlockTogglers';

import { AchivmentsFormProps } from './AchivmentsForm.type';

import { isPublishBlockButton } from '../utils/common';

export default function AchivmentsForm({
  data,
  loadingType,
  onPublish,
  onCreate,
}: AchivmentsFormProps) {
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
