import { Box } from '@mui/material';

import {
  AboutUsForm,
  AboutUsBlockFullDataType,
  AboutUsFormDataType,
  AboutUsFormService,
  BlockHeading,
} from '@/src/pages/Admin/Pages/Components';
import { PageEnum } from '@/src/pages/Admin/Pages/pages-enum';
import { BlockInfoPageType } from '@/src/pages/Admin/Pages/Components/types';
import { useApisBlock } from '@/src/pages/Admin/Pages/hooks/useApisBlock';

import { BlocsEnum } from '@/src/pages/Admin/Pages/blocks-enum';

const service = new AboutUsFormService();
const currentPage = PageEnum.HOME;

const blockInfoPage: BlockInfoPageType = {
  block_order: 1,
  block_page: currentPage,
  block_name: BlocsEnum.BlockAboutUs,
};

const getAdapterSectionParams = (
  params: AboutUsFormDataType,
  additionalParams: BlockInfoPageType
): AboutUsBlockFullDataType => {
  const { publish, ...props } = params;
  return {
    ...props,
    ...additionalParams,
  };
};

export default function SectionAboutUs() {
  const {
    data,
    loadingType,
    loadingForPublishLabel,
    updateSection,
    createSection,
    publishToggleSection,
  } = useApisBlock<AboutUsBlockFullDataType>({
    page: currentPage,
    service: service,
    blockInfoPage: blockInfoPage,
  });

  function onHandleCreateSection(params: AboutUsFormDataType) {
    createSection(getAdapterSectionParams(params, blockInfoPage));
  }

  function onHandleUpdateSection(params: AboutUsFormDataType) {
    updateSection(getAdapterSectionParams(params, blockInfoPage));
  }

  return (
    <Box>
      <BlockHeading
        heading="Section about us"
        loading={loadingForPublishLabel}
        publish={data?.publish}
      />
      <AboutUsForm
        data={data}
        loadingType={loadingType}
        onCreate={onHandleCreateSection}
        onUpdate={onHandleUpdateSection}
        onPublish={publishToggleSection}
      />
    </Box>
  );
}
