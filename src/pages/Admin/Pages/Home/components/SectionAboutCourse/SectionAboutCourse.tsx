import { Box } from '@mui/material';

import {
  AboutCourseForm,
  AboutCourseBlockFullDataType,
  AboutCourseFormDataType,
  AboutCourseFormService,
  BlockHeading,
} from '@/src/pages/Admin/Pages/Components';
import { PageEnum } from '@/src/pages/Admin/Pages/pages-enum';
import { BlockInfoPageType } from '@/src/pages/Admin/Pages/Components/types';
import { useApisBlock } from '@/src/pages/Admin/Pages/hooks/useApisBlock';
import { BlocsEnum } from '@/src/pages/Admin/Pages/blocks-enum';

const service = new AboutCourseFormService();
const currentPage = PageEnum.HOME;

const blockInfoPage: BlockInfoPageType = {
  block_order: 2,
  block_page: currentPage,
  block_name: BlocsEnum.BlockAboutCourse,
};

const getAdapterSectionParams = (
  params: AboutCourseFormDataType,
  additionalParams: BlockInfoPageType
): AboutCourseBlockFullDataType => {
  const { publish, ...props } = params;
  return {
    ...props,
    ...additionalParams,
  };
};

export default function SectionAboutCourse() {
  const {
    data,
    loadingType,
    loadingForPublishLabel,
    updateSection,
    createSection,
    publishToggleSection,
  } = useApisBlock<AboutCourseBlockFullDataType>({
    page: currentPage,
    service: service,
    blockInfoPage: blockInfoPage,
  });

  function onHandleCreateSection(params: AboutCourseFormDataType) {
    createSection(getAdapterSectionParams(params, blockInfoPage));
  }

  function onHandleUpdateSection(params: AboutCourseFormDataType) {
    updateSection(getAdapterSectionParams(params, blockInfoPage));
  }

  return (
    <Box>
      <BlockHeading
        heading="Section about course"
        loading={loadingForPublishLabel}
        publish={data?.publish}
      />
      <AboutCourseForm
        data={data}
        loadingType={loadingType}
        onCreate={onHandleCreateSection}
        onUpdate={onHandleUpdateSection}
        onPublish={publishToggleSection}
      />
    </Box>
  );
}
