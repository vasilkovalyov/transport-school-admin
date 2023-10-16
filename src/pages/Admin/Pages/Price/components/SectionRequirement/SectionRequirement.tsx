import { Box } from '@mui/material';

import {
  RequirementForm,
  RequirementFormService,
  IRequirementBlockFullData,
  IRequirementFormData,
  BlockHeading,
} from '@/src/pages/Admin/Pages/Components';
import { PageEnum } from '@/src/pages/Admin/Pages/pages-enum';
import { IBlockInfoPage } from '@/src/pages/Admin/Pages/Components/types';
import { useApisBlock } from '@/src/pages/Admin/Pages/hooks/useApisBlock';
import { BlocsEnum } from '@/src/pages/Admin/Pages/blocks-enum';

const service = new RequirementFormService();
const currentPage = PageEnum.PRICE;

const blockInfoPage: IBlockInfoPage = {
  block_order: 3,
  block_page: currentPage,
  block_name: BlocsEnum.BlockRequirement,
};

const getAdapterSectionParams = (
  params: IRequirementFormData,
  additionalParams: IBlockInfoPage
): IRequirementBlockFullData => {
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
  } = useApisBlock<IRequirementBlockFullData>({
    page: currentPage,
    service: service,
    blockInfoPage: blockInfoPage,
  });

  function onHandleCreateSection(params: IRequirementFormData) {
    createSection(getAdapterSectionParams(params, blockInfoPage));
  }

  function onHandleUpdateSection(params: IRequirementFormData) {
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
