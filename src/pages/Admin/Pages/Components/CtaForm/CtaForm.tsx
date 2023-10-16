import { Box } from '@mui/material';

import { CtaFormProps } from './CtaForm.type';
import { ReuseBlockTogglers } from '../ReuseBlockTogglers';

export default function CtaForm({
  data,
  loadingType,
  onPublish,
  onCreate,
}: CtaFormProps) {
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
