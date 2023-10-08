import { Box } from '@mui/material';

import {
  StructEducationForm,
  StructEducationFormService,
  IStructEducationBlockFullData,
  IStructEducationFormData,
  BlockHeading,
} from '@/src/pages/Admin/Pages/Components';
import { PageEnum } from '@/src/pages/Admin/Pages/pages-enum';
import { IBlockInfoPage } from '@/src/pages/Admin/Pages/Components/types';
import { useApisBlock } from '@/src/pages/Admin/Pages/hooks/useApisBlock';
import { BlocsEnum } from '@/src/pages/Admin/Pages/blocks-enum';

const service = new StructEducationFormService();
const currentPage = PageEnum.ABOUT_COURSE;

const blockInfoPage: IBlockInfoPage = {
  block_order: 0,
  block_page: currentPage,
  block_name: BlocsEnum.BlockStructEducation,
};

const getAdapterSectionParams = (
  params: IStructEducationFormData,
  additionalParams: IBlockInfoPage
): IStructEducationBlockFullData => {
  return {
    ...params,
    ...additionalParams,
  };
};

export default function SectionStructEducation() {
  const { data, updateSection, createSection, publishToggleSection } =
    useApisBlock<IStructEducationBlockFullData>({
      page: currentPage,
      service: service,
      blockInfoPage: blockInfoPage,
    });

  function onHandleCreateSection(params: IStructEducationFormData) {
    createSection(getAdapterSectionParams(params, blockInfoPage));
  }

  function onHandleUpdateSection(params: IStructEducationFormData) {
    updateSection(getAdapterSectionParams(params, blockInfoPage));
  }

  return (
    <Box>
      <BlockHeading
        heading="Section struct education"
        publish={data?.publish}
      />
      <StructEducationForm
        data={data}
        onUpdate={onHandleUpdateSection}
        onCreate={onHandleCreateSection}
        onPublish={publishToggleSection}
      />
    </Box>
  );
}
