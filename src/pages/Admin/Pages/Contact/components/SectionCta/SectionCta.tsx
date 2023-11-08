import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import LinearProgress from '@mui/material/LinearProgress';

import {
  CtaForm,
  CtaFormBlockFullDataType,
  CtaFormService,
  BlockHeading,
} from '@/src/pages/Admin/Pages/Components';
import { PageEnum } from '@/src/pages/Admin/Pages/pages-enum';
import { BlockInfoPageType } from '@/src/pages/Admin/Pages/Components/types';
import { BlocsEnum } from '@/src/pages/Admin/Pages/blocks-enum';
import { Link } from 'react-router-dom';
import { PageSections } from '@/src/constants/routes/sections';
import { useApisReuseBlock } from '@/src/pages/Admin/Pages/hooks/useApisReuseBlock';

const service = new CtaFormService();
const currentPage = PageEnum.CONTACT;

const blockInfoPage: BlockInfoPageType = {
  block_order: 2,
  block_page: currentPage,
  block_name: BlocsEnum.BlockCta,
};

export default function SectionCta() {
  const { data, loadingType, loadingForPublishLabel, onCreate, onPublish } =
    useApisReuseBlock({
      service: service,
      page: currentPage,
      blockInfoPage: blockInfoPage,
    });

  function createAdapter(): CtaFormBlockFullDataType {
    return {
      ...blockInfoPage,
      publish: false,
    };
  }

  return (
    <Box>
      <BlockHeading
        heading="Section cta"
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
              <Link to={PageSections.CTA}>section cta</Link>
            </Typography>
          ) : (
            <CtaForm
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
