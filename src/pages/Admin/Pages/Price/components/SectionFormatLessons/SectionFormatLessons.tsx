import { Box } from '@mui/material';

import {
  FormatLessonsForm,
  FormatLessonsBlockFullDataType,
  FormatLessonsFormDataType,
  FormatLessonsFormService,
  BlockHeading,
} from '@/src/pages/Admin/Pages/Components';
import { PageEnum } from '@/src/pages/Admin/Pages/pages-enum';
import { BlockInfoPageType } from '@/src/pages/Admin/Pages/Components/types';
import { useApisBlock } from '@/src/pages/Admin/Pages/hooks/useApisBlock';
import { BlocsEnum } from '@/src/pages/Admin/Pages/blocks-enum';

const service = new FormatLessonsFormService();
const currentPage = PageEnum.PRICE;

const blockInfoPage: BlockInfoPageType = {
  block_order: 1,
  block_page: currentPage,
  block_name: BlocsEnum.BlockFormatLessons,
};

const getAdapterSectionParams = (
  params: FormatLessonsFormDataType,
  additionalParams: BlockInfoPageType
): FormatLessonsBlockFullDataType => {
  const { publish, ...props } = params;
  return {
    ...props,
    ...additionalParams,
  };
};

export default function SectionFormatLessons() {
  const {
    data,
    loadingType,
    loadingForPublishLabel,
    updateSection,
    createSection,
    publishToggleSection,
  } = useApisBlock<FormatLessonsBlockFullDataType>({
    page: currentPage,
    service: service,
    blockInfoPage: blockInfoPage,
  });

  function onHandleCreateSection(params: FormatLessonsFormDataType) {
    createSection(getAdapterSectionParams(params, blockInfoPage));
  }

  function onHandleUpdateSection(params: FormatLessonsFormDataType) {
    updateSection(getAdapterSectionParams(params, blockInfoPage));
  }

  return (
    <Box>
      <BlockHeading
        heading="Section format lessons"
        loading={loadingForPublishLabel}
        publish={data?.publish}
      />
      <FormatLessonsForm
        data={data}
        loadingType={loadingType}
        onCreate={onHandleCreateSection}
        onUpdate={onHandleUpdateSection}
        onPublish={publishToggleSection}
      />
    </Box>
  );
}
