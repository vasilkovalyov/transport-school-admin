import { Box } from '@mui/material';
import { ReuseBlockTogglers } from '../ReuseBlockTogglers';

import { AchivmentsFormProps } from './AchivmentsForm.type';

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
        showPublishButton={data !== null}
        onSubmit={() => onCreate && onCreate()}
        onPublish={onPublish}
      />
    </Box>
  );
}
