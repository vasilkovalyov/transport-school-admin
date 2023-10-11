import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';

import {
  AchivmentsForm,
  IAchivmentsFormBlockFullData,
  AchivmentsFormService,
  BlockHeading,
} from '@/src/pages/Admin/Pages/Components';
import { PageEnum } from '@/src/pages/Admin/Pages/pages-enum';
import { IBlockInfoPage } from '@/src/pages/Admin/Pages/Components/types';
import { BlocsEnum } from '@/src/pages/Admin/Pages/blocks-enum';
import { Link } from 'react-router-dom';
import { LinksPageSections } from '@/src/constants/routes';
import { useApisReuseBlock } from '@/src/pages/Admin/Pages/hooks/useApisReuseBlock';

const service = new AchivmentsFormService();
const currentPage = PageEnum.COMPANY;

const blockInfoPage: IBlockInfoPage = {
  block_order: 3,
  block_page: currentPage,
  block_name: BlocsEnum.BlockAchivments,
};

export default function SectionAchivments() {
  const { data, onCreate, onPublish } = useApisReuseBlock({
    service: service,
    page: currentPage,
    blockInfoPage: blockInfoPage,
  });

  function createAdapter(): IAchivmentsFormBlockFullData {
    return {
      ...blockInfoPage,
      publish: false,
    };
  }

  return (
    <Box>
      <BlockHeading heading="Section achivments" publish={data?.publish} />
      {data === null ? (
        <Typography variant="h4">
          First of all you have to create{' '}
          <Link to={LinksPageSections.ACHIVMENTS}>section achivments</Link>
        </Typography>
      ) : (
        <AchivmentsForm
          data={data}
          onCreate={() => onCreate(createAdapter())}
          onPublish={onPublish}
        />
      )}
    </Box>
  );
}
