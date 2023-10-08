import { Box } from '@mui/material';

import {
  CourseForPeopleFormService,
  ICourseForPeopleFullData,
  ICourseForPeopleFormData,
  BlockHeading,
  CourseForPeopleForm,
} from '@/src/pages/Admin/Pages/Components';

import { PageEnum } from '@/src/pages/Admin/Pages/pages-enum';
import { IBlockInfoPage } from '@/src/pages/Admin/Pages/Components/types';
import { useApisBlock } from '@/src/pages/Admin/Pages/hooks/useApisBlock';
import { BlocsEnum } from '@/src/pages/Admin/Pages/blocks-enum';

const service = new CourseForPeopleFormService();
const currentPage = PageEnum.ABOUT_COURSE;

const blockInfoPage: IBlockInfoPage = {
  block_order: 0,
  block_page: currentPage,
  block_name: BlocsEnum.BlockCourseForPeople,
};

const getAdapterSectionParams = (
  params: ICourseForPeopleFormData,
  additionalParams: IBlockInfoPage
): ICourseForPeopleFullData => {
  return {
    ...params,
    ...additionalParams,
  };
};

export default function SectionCourseForPeople() {
  const { data, updateSection, createSection, publishToggleSection } =
    useApisBlock<ICourseForPeopleFullData>({
      page: currentPage,
      service: service,
      blockInfoPage: blockInfoPage,
    });

  function onHandleCreateSection(params: ICourseForPeopleFormData) {
    createSection(getAdapterSectionParams(params, blockInfoPage));
  }

  function onHandleUpdateSection(params: ICourseForPeopleFormData) {
    updateSection(getAdapterSectionParams(params, blockInfoPage));
  }

  return (
    <Box>
      <BlockHeading
        heading="Section course for people"
        publish={data?.publish}
      />
      <CourseForPeopleForm
        data={data}
        onUpdate={onHandleUpdateSection}
        onCreate={onHandleCreateSection}
        onPublish={publishToggleSection}
      />
    </Box>
  );
}
