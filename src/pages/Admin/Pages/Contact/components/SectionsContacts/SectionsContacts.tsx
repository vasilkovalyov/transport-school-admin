import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import LinearProgress from '@mui/material/LinearProgress';

import {
  ContactsForm,
  ContactsBlockFullDataType,
  ContactsFormService,
  BlockHeading,
} from '@/src/pages/Admin/Pages/Components';
import { PageEnum } from '@/src/pages/Admin/Pages/pages-enum';
import { BlockInfoPageType } from '@/src/pages/Admin/Pages/Components/types';
import { BlocsEnum } from '@/src/pages/Admin/Pages/blocks-enum';
import { Link } from 'react-router-dom';
import { LinksPageSections } from '@/src/constants/routes';
import { useApisReuseBlock } from '@/src/pages/Admin/Pages/hooks/useApisReuseBlock';

const service = new ContactsFormService();
const currentPage = PageEnum.CONTACT;

const blockInfoPage: BlockInfoPageType = {
  block_order: 1,
  block_page: currentPage,
  block_name: BlocsEnum.BlockContacts,
};

export default function SectionContacts() {
  const { data, loadingType, loadingForPublishLabel, onCreate, onPublish } =
    useApisReuseBlock({
      service: service,
      page: currentPage,
      blockInfoPage: blockInfoPage,
    });

  function createAdapter(): ContactsBlockFullDataType {
    return {
      ...blockInfoPage,
      publish: false,
    };
  }

  return (
    <Box>
      <BlockHeading
        heading="Section contacts"
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
              <Link to={LinksPageSections.CONTACTS}>section contacts</Link>
            </Typography>
          ) : (
            <ContactsForm
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
