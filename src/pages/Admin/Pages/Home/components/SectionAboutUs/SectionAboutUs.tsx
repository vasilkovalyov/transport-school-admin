import { Box } from '@mui/material';

import {
  AboutUsForm,
  IAboutUsBlockFullData,
  IAboutUsFormData,
  AboutUsFormService,
  BlockHeading,
} from '@/src/pages/Admin/Pages/Components';
import { PageEnum } from '@/src/pages/Admin/Pages/pages-enum';
import { IBlockInfoPage } from '@/src/pages/Admin/Pages/Components/types';
import { useApisBlock } from '@/src/pages/Admin/Pages/hooks/useApisBlock';

import { BlocsEnum } from '@/src/pages/Admin/Pages/blocks-enum';

const service = new AboutUsFormService();
const currentPage = PageEnum.HOME;

const blockInfoPage: IBlockInfoPage = {
  block_order: 1,
  block_page: currentPage,
  block_name: BlocsEnum.BlockAboutUs,
};

const getAdapterSectionParams = (
  params: IAboutUsFormData,
  additionalParams: IBlockInfoPage
): IAboutUsBlockFullData => {
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
  } = useApisBlock<IAboutUsBlockFullData>({
    page: currentPage,
    service: service,
    blockInfoPage: blockInfoPage,
  });

  function onHandleCreateSection(params: IAboutUsFormData) {
    createSection(getAdapterSectionParams(params, blockInfoPage));
  }

  function onHandleUpdateSection(params: IAboutUsFormData) {
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
