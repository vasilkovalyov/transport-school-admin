import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import LinearProgress from '@mui/material/LinearProgress';

import {
  ReviewForm,
  ReviewFormBlockFullDataType,
  ReviewFormService,
  BlockHeading,
} from '@/src/pages/Admin/Pages/Components';
import { PageEnum } from '@/src/pages/Admin/Pages/pages-enum';
import { BlockInfoPageType } from '@/src/pages/Admin/Pages/Components/types';
import { BlocsEnum } from '@/src/pages/Admin/Pages/blocks-enum';
import { Link } from 'react-router-dom';
import { PageSections } from '@/src/constants/routes/sections';
import { useApisReuseBlock } from '@/src/pages/Admin/Pages/hooks/useApisReuseBlock';

const service = new ReviewFormService();
const currentPage = PageEnum.COMPANY;

const blockInfoPage: BlockInfoPageType = {
  block_order: 2,
  block_page: currentPage,
  block_name: BlocsEnum.BlockReview,
};

export default function SectionReview() {
  const { data, loadingType, loadingForPublishLabel, onCreate, onPublish } =
    useApisReuseBlock({
      service: service,
      page: currentPage,
      blockInfoPage: blockInfoPage,
    });

  function createAdapter(): ReviewFormBlockFullDataType {
    return {
      ...blockInfoPage,
      publish: false,
    };
  }

  return (
    <Box>
      <BlockHeading
        heading="Section Review"
        loading={loadingForPublishLabel}
        publish={data?.publish}
      />

      {loadingType === 'loading' ? (
        <Box mb={2}>
          <LinearProgress />
        </Box>
      ) : (
        <Box>
          {data === null ? (
            <Typography variant="h4">
              First of all you have to create{' '}
              <Link to={PageSections.REVIEW}>section faq</Link>
            </Typography>
          ) : (
            <ReviewForm
              data={data}
              loadingType={loadingType}
              onCreate={() => onCreate(createAdapter())}
              onPublish={onPublish}
            />
          )}
        </Box>
      )}
    </Box>
  );
}
