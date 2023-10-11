import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';

import {
  ContactsForm,
  IContactsBlockFullData,
  ContactsFormService,
  BlockHeading,
} from '@/src/pages/Admin/Pages/Components';
import { PageEnum } from '@/src/pages/Admin/Pages/pages-enum';
import { IBlockInfoPage } from '@/src/pages/Admin/Pages/Components/types';
import { BlocsEnum } from '@/src/pages/Admin/Pages/blocks-enum';
import { Link } from 'react-router-dom';
import { LinksPageSections } from '@/src/constants/routes';
import { useApisReuseBlock } from '@/src/pages/Admin/Pages/hooks/useApisReuseBlock';

const service = new ContactsFormService();
const currentPage = PageEnum.SCHEDULE;

const blockInfoPage: IBlockInfoPage = {
  block_order: 2,
  block_page: currentPage,
  block_name: BlocsEnum.BlockContacts,
};

export default function SectionContacts() {
  const { data, onCreate, onPublish } = useApisReuseBlock({
    service: service,
    page: currentPage,
    blockInfoPage: blockInfoPage,
  });

  function createAdapter(): IContactsBlockFullData {
    return {
      ...blockInfoPage,
      publish: false,
    };
  }

  return (
    <Box>
      <BlockHeading heading="Section contacts" publish={data?.publish} />
      {data === null ? (
        <Typography variant="h4">
          First of all you have to create{' '}
          <Link to={LinksPageSections.CONTACTS}>section contacts</Link>
        </Typography>
      ) : (
        <ContactsForm
          data={data}
          onCreate={() => onCreate(createAdapter())}
          onPublish={onPublish}
        />
      )}
    </Box>
  );
}
