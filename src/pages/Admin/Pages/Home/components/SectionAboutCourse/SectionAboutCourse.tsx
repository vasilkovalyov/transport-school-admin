import { Box } from '@mui/material';

import {
  AboutCourseForm,
  IAboutCourseBlockFullData,
  IAboutCourseFormData,
  AboutCourseFormService,
  BlockHeading,
} from '@/src/pages/Admin/Pages/Components';
import { PageEnum } from '@/src/pages/Admin/Pages/pages-enum';
import { IBlockInfoPage } from '@/src/pages/Admin/Pages/Components/types';
import { useApisBlock } from '@/src/pages/Admin/Pages/hooks/useApisBlock';
import { BlocsEnum } from '@/src/pages/Admin/Pages/blocks-enum';

const service = new AboutCourseFormService();
const currentPage = PageEnum.HOME;

const blockInfoPage: IBlockInfoPage = {
  block_order: 2,
  block_page: currentPage,
  block_name: BlocsEnum.BlockAboutCourse,
};

const getAdapterSectionParams = (
  params: IAboutCourseFormData,
  additionalParams: IBlockInfoPage
): IAboutCourseBlockFullData => {
  const { publish, ...props } = params;
  return {
    ...props,
    ...additionalParams,
  };
};

export default function SectionAboutCourse() {
  const { data, updateSection, createSection, publishToggleSection } =
    useApisBlock<IAboutCourseBlockFullData>({
      page: currentPage,
      service: service,
      blockInfoPage: blockInfoPage,
    });

  function onHandleCreateSection(params: IAboutCourseFormData) {
    createSection(getAdapterSectionParams(params, blockInfoPage));
  }

  function onHandleUpdateSection(params: IAboutCourseFormData) {
    updateSection(getAdapterSectionParams(params, blockInfoPage));
  }

  return (
    <Box>
      <BlockHeading heading="Section about course" publish={data?.publish} />
      <AboutCourseForm
        data={data}
        onCreate={onHandleCreateSection}
        onUpdate={onHandleUpdateSection}
        onPublish={publishToggleSection}
      />
    </Box>
  );
}
