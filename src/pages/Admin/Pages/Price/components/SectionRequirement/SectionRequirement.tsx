import { Box } from '@mui/material';

import {
  RequirementForm,
  RequirementFormService,
  RequirementBlockFullDataType,
  RequirementFormDataType,
  BlockHeading,
} from '@/src/pages/Admin/Pages/Components';
import { PageEnum } from '@/src/pages/Admin/Pages/pages-enum';
import { BlockInfoPageType } from '@/src/pages/Admin/Pages/Components/types';
import { useApisBlock } from '@/src/pages/Admin/Pages/hooks/useApisBlock';
import { BlocsEnum } from '@/src/pages/Admin/Pages/blocks-enum';

const service = new RequirementFormService();
const currentPage = PageEnum.PRICE;

const blockInfoPage: BlockInfoPageType = {
  block_order: 3,
  block_page: currentPage,
  block_name: BlocsEnum.BlockRequirement,
};

const getAdapterSectionParams = (
  params: RequirementFormDataType,
  additionalParams: BlockInfoPageType
): RequirementBlockFullDataType => {
  const { publish, ...props } = params;
  return {
    ...props,
    ...additionalParams,
  };
};

export default function SectionRequirement() {
  const {
    data,
    loadingType,
    loadingForPublishLabel,
    updateSection,
    createSection,
    publishToggleSection,
  } = useApisBlock<RequirementBlockFullDataType>({
    page: currentPage,
    service: service,
    blockInfoPage: blockInfoPage,
  });

  function onHandleCreateSection(params: RequirementFormDataType) {
    createSection(getAdapterSectionParams(params, blockInfoPage));
  }

  function onHandleUpdateSection(params: RequirementFormDataType) {
    updateSection(getAdapterSectionParams(params, blockInfoPage));
  }

  return (
    <Box>
      <BlockHeading
        heading="Section requirement"
        loading={loadingForPublishLabel}
        publish={data?.publish}
      />
      <RequirementForm
        data={data}
        loadingType={loadingType}
        onCreate={onHandleCreateSection}
        onUpdate={onHandleUpdateSection}
        onPublish={publishToggleSection}
      />
    </Box>
  );
}
