import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';

import {
  CtaForm,
  ICtaFormBlockFullData,
  CtaFormService,
  BlockHeading,
} from '@/src/pages/Admin/Pages/Components';
import { PageEnum } from '@/src/pages/Admin/Pages/pages-enum';
import { IBlockInfoPage } from '@/src/pages/Admin/Pages/Components/types';
import { BlocsEnum } from '@/src/pages/Admin/Pages/blocks-enum';
import { Link } from 'react-router-dom';
import { LinksPageSections } from '@/src/constants/routes';
import { useApisReuseBlock } from '@/src/pages/Admin/Pages/hooks/useApisReuseBlock';

const service = new CtaFormService();
const currentPage = PageEnum.BLOG;

const blockInfoPage: IBlockInfoPage = {
  block_order: 2,
  block_page: currentPage,
  block_name: BlocsEnum.BlockCta,
};

export default function SectionCta() {
  const { data, onCreate, onPublish } = useApisReuseBlock({
    service: service,
    page: currentPage,
    blockInfoPage: blockInfoPage,
  });

  function createAdapter(): ICtaFormBlockFullData {
    return {
      ...blockInfoPage,
      publish: false,
    };
  }

  return (
    <Box>
      <BlockHeading heading="Section cta" publish={data?.publish} />
      {data === null ? (
        <Typography variant="h4">
          First of all you have to create{' '}
          <Link to={LinksPageSections.FAQ}>section faq</Link>
        </Typography>
      ) : (
        <CtaForm
          data={data}
          onCreate={() => onCreate(createAdapter())}
          onPublish={onPublish}
        />
      )}
    </Box>
  );
}
