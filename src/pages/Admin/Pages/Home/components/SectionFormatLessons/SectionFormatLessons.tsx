import { Box } from '@mui/material';

import {
  FormatLessonsForm,
  IFormatLessonsBlockFullData,
  IFormatLessonsFormData,
  FormatLessonsFormService,
  BlockHeading,
} from '@/src/pages/Admin/Pages/Components';
import { PageEnum } from '@/src/pages/Admin/Pages/pages-enum';
import { IBlockInfoPage } from '@/src/pages/Admin/Pages/Components/types';
import { useApisBlock } from '@/src/pages/Admin/Pages/hooks/useApisBlock';
import { BlocsEnum } from '@/src/pages/Admin/Pages/blocks-enum';

const service = new FormatLessonsFormService();
const currentPage = PageEnum.HOME;

const blockInfoPage: IBlockInfoPage = {
  block_order: 0,
  block_page: currentPage,
  block_name: BlocsEnum.BlockFormatLessons,
};

const getAdapterSectionParams = (
  params: IFormatLessonsFormData,
  additionalParams: IBlockInfoPage
): IFormatLessonsBlockFullData => {
  return {
    ...params,
    ...additionalParams,
  };
};

export default function SectionFormatLessons() {
  const { data, updateSection, createSection, publishToggleSection } =
    useApisBlock<IFormatLessonsBlockFullData>({
      page: currentPage,
      service: service,
      blockInfoPage: blockInfoPage,
    });

  function onHandleCreateSection(params: IFormatLessonsFormData) {
    createSection(getAdapterSectionParams(params, blockInfoPage));
  }

  function onHandleUpdateSection(params: IFormatLessonsFormData) {
    updateSection(getAdapterSectionParams(params, blockInfoPage));
  }

  return (
    <Box>
      <BlockHeading heading="Section format lessons" publish={data?.publish} />
      <FormatLessonsForm
        data={data}
        onCreate={onHandleCreateSection}
        onUpdate={onHandleUpdateSection}
        onPublish={publishToggleSection}
      />
    </Box>
  );
}
