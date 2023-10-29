import { Box } from '@mui/material';

import {
  CourseForPeopleFormService,
  CourseForPeopleFullDataType,
  CourseForPeopleFormDataType,
  BlockHeading,
  CourseForPeopleForm,
} from '@/src/pages/Admin/Pages/Components';

import { PageEnum } from '@/src/pages/Admin/Pages/pages-enum';
import { BlockInfoPageType } from '@/src/pages/Admin/Pages/Components/types';
import { useApisBlock } from '@/src/pages/Admin/Pages/hooks/useApisBlock';
import { BlocsEnum } from '@/src/pages/Admin/Pages/blocks-enum';

const service = new CourseForPeopleFormService();
const currentPage = PageEnum.ABOUT_COURSE;

const blockInfoPage: BlockInfoPageType = {
  block_order: 1,
  block_page: currentPage,
  block_name: BlocsEnum.BlockCourseForPeople,
};

const getAdapterSectionParams = (
  params: CourseForPeopleFormDataType,
  additionalParams: BlockInfoPageType
): CourseForPeopleFullDataType => {
  const { publish, ...props } = params;
  return {
    ...props,
    ...additionalParams,
  };
};

export default function SectionCourseForPeople() {
  const {
    data,
    loadingType,
    loadingForPublishLabel,
    updateSection,
    createSection,
    publishToggleSection,
  } = useApisBlock<CourseForPeopleFullDataType>({
    page: currentPage,
    service: service,
    blockInfoPage: blockInfoPage,
  });

  function onHandleCreateSection(params: CourseForPeopleFormDataType) {
    createSection(getAdapterSectionParams(params, blockInfoPage));
  }

  function onHandleUpdateSection(params: CourseForPeopleFormDataType) {
    updateSection(getAdapterSectionParams(params, blockInfoPage));
  }

  return (
    <Box>
      <BlockHeading
        heading="Section course for people"
        loading={loadingForPublishLabel}
        publish={data?.publish}
      />
      <CourseForPeopleForm
        data={data}
        loadingType={loadingType}
        onCreate={onHandleCreateSection}
        onUpdate={onHandleUpdateSection}
        onPublish={publishToggleSection}
      />
    </Box>
  );
}
