import { Box } from '@mui/material';

import {
  ContactForm,
  ContactFormFormService,
  ContactBlockFullDataType,
  ContactFormDataType,
  BlockHeading,
} from '@/src/pages/Admin/Pages/Components';
import { PageEnum } from '@/src/pages/Admin/Pages/pages-enum';
import { BlockInfoPageType } from '@/src/pages/Admin/Pages/Components/types';
import { useApisBlock } from '@/src/pages/Admin/Pages/hooks/useApisBlock';
import { BlocsEnum } from '@/src/pages/Admin/Pages/blocks-enum';

const service = new ContactFormFormService();
const currentPage = PageEnum.CONTACT;

const blockInfoPage: BlockInfoPageType = {
  block_order: 0,
  block_page: currentPage,
  block_name: BlocsEnum.BlockContactForm,
};

const getAdapterSectionParams = (
  params: ContactFormDataType,
  additionalParams: BlockInfoPageType
): ContactBlockFullDataType => {
  const { publish, ...props } = params;
  return {
    ...props,
    ...additionalParams,
  };
};

export default function SectionContactForm() {
  const {
    data,
    loadingType,
    loadingForPublishLabel,
    updateSection,
    createSection,
    publishToggleSection,
  } = useApisBlock<ContactBlockFullDataType>({
    page: currentPage,
    service: service,
    blockInfoPage: blockInfoPage,
  });

  function onHandleCreateSection(params: ContactFormDataType) {
    createSection(getAdapterSectionParams(params, blockInfoPage));
  }

  function onHandleUpdateSection(params: ContactFormDataType) {
    updateSection(getAdapterSectionParams(params, blockInfoPage));
  }

  return (
    <Box>
      <BlockHeading
        heading="Section contact form"
        loading={loadingForPublishLabel}
        publish={data?.publish}
      />
      <ContactForm
        data={data}
        loadingType={loadingType}
        onCreate={onHandleCreateSection}
        onUpdate={onHandleUpdateSection}
        onPublish={publishToggleSection}
      />
    </Box>
  );
}
