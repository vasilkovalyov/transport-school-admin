import { Box } from '@mui/material';

import {
  StructEducationForm,
  StructEducationFormService,
  StructEducationBlockFullDataType,
  StructEducationFormDataType,
  BlockHeading,
} from '@/src/pages/Admin/Pages/Components';
import { PageEnum } from '@/src/pages/Admin/Pages/pages-enum';
import { BlockInfoPageType } from '@/src/pages/Admin/Pages/Components/types';
import { useApisBlock } from '@/src/pages/Admin/Pages/hooks/useApisBlock';
import { BlocsEnum } from '@/src/pages/Admin/Pages/blocks-enum';

const service = new StructEducationFormService();
const currentPage = PageEnum.ABOUT_COURSE;

const blockInfoPage: BlockInfoPageType = {
  block_order: 2,
  block_page: currentPage,
  block_name: BlocsEnum.BlockStructEducation,
};

const getAdapterSectionParams = (
  params: StructEducationFormDataType,
  additionalParams: BlockInfoPageType
): StructEducationBlockFullDataType => {
  const { publish, ...props } = params;
  return {
    ...props,
    ...additionalParams,
  };
};

export default function SectionStructEducation() {
  const {
    data,
    loadingType,
    loadingForPublishLabel,
    updateSection,
    createSection,
    publishToggleSection,
  } = useApisBlock<StructEducationBlockFullDataType>({
    page: currentPage,
    service: service,
    blockInfoPage: blockInfoPage,
  });

  function onHandleCreateSection(params: StructEducationFormDataType) {
    createSection(getAdapterSectionParams(params, blockInfoPage));
  }

  function onHandleUpdateSection(params: StructEducationFormDataType) {
    updateSection(getAdapterSectionParams(params, blockInfoPage));
  }

  return (
    <Box>
      <BlockHeading
        heading="Section struct education"
        loading={loadingForPublishLabel}
        publish={data?.publish}
      />
      <StructEducationForm
        data={data}
        loadingType={loadingType}
        onCreate={onHandleCreateSection}
        onUpdate={onHandleUpdateSection}
        onPublish={publishToggleSection}
      />
    </Box>
  );
}
