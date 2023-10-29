import { Box } from '@mui/material';

import {
  OurBenefitsForm,
  OurBenefitsFormService,
  OurBenefitsBlockFullDataType,
  OurBenefitsFormDataType,
  BlockHeading,
} from '@/src/pages/Admin/Pages/Components';
import { PageEnum } from '@/src/pages/Admin/Pages/pages-enum';
import { BlockInfoPageType } from '@/src/pages/Admin/Pages/Components/types';
import { useApisBlock } from '@/src/pages/Admin/Pages/hooks/useApisBlock';
import { BlocsEnum } from '@/src/pages/Admin/Pages/blocks-enum';

const service = new OurBenefitsFormService();
const currentPage = PageEnum.ABOUT_COURSE;

const blockInfoPage: BlockInfoPageType = {
  block_order: 3,
  block_page: currentPage,
  block_name: BlocsEnum.BlockOurBenefits,
};

const getAdapterSectionParams = (
  params: OurBenefitsFormDataType,
  additionalParams: BlockInfoPageType
): OurBenefitsBlockFullDataType => {
  const { publish, ...props } = params;
  return {
    ...props,
    ...additionalParams,
  };
};

export default function SectionOurBenefits() {
  const {
    data,
    loadingType,
    loadingForPublishLabel,
    updateSection,
    createSection,
    publishToggleSection,
  } = useApisBlock<OurBenefitsBlockFullDataType>({
    page: currentPage,
    service: service,
    blockInfoPage: blockInfoPage,
  });

  function onHandleCreateSection(params: OurBenefitsFormDataType) {
    createSection(getAdapterSectionParams(params, blockInfoPage));
  }

  function onHandleUpdateSection(params: OurBenefitsFormDataType) {
    updateSection(getAdapterSectionParams(params, blockInfoPage));
  }

  return (
    <Box>
      <BlockHeading
        heading="Section our benefits"
        loading={loadingForPublishLabel}
        publish={data?.publish}
      />
      <OurBenefitsForm
        data={data}
        loadingType={loadingType}
        onCreate={onHandleCreateSection}
        onUpdate={onHandleUpdateSection}
        onPublish={publishToggleSection}
      />
    </Box>
  );
}
