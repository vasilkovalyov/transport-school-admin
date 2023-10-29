import { Box } from '@mui/material';

import {
  BlogForm,
  BlogFormService,
  BlogBlockFullDataType,
  BlogFormDataType,
  BlockHeading,
} from '@/src/pages/Admin/Pages/Components';
import { PageEnum } from '@/src/pages/Admin/Pages/pages-enum';
import { BlockInfoPageType } from '@/src/pages/Admin/Pages/Components/types';
import { useApisBlock } from '@/src/pages/Admin/Pages/hooks/useApisBlock';
import { BlocsEnum } from '@/src/pages/Admin/Pages/blocks-enum';

const service = new BlogFormService();
const currentPage = PageEnum.BLOG;

const blockInfoPage: BlockInfoPageType = {
  block_order: 1,
  block_page: currentPage,
  block_name: BlocsEnum.BlockBlog,
};

const getAdapterSectionParams = (
  params: BlogFormDataType,
  additionalParams: BlockInfoPageType
): BlogBlockFullDataType => {
  const { publish, ...props } = params;
  return {
    ...props,
    ...additionalParams,
  };
};

export default function SectionBlog() {
  const {
    data,
    loadingType,
    loadingForPublishLabel,
    updateSection,
    createSection,
    publishToggleSection,
  } = useApisBlock<BlogBlockFullDataType>({
    page: currentPage,
    service: service,
    blockInfoPage: blockInfoPage,
  });

  function onHandleCreateSection(params: BlogFormDataType) {
    createSection(getAdapterSectionParams(params, blockInfoPage));
  }

  function onHandleUpdateSection(params: BlogFormDataType) {
    updateSection(getAdapterSectionParams(params, blockInfoPage));
  }

  return (
    <Box>
      <BlockHeading
        heading="Section blog"
        loading={loadingForPublishLabel}
        publish={data?.publish}
      />
      <BlogForm
        data={data}
        loadingType={loadingType}
        onCreate={onHandleCreateSection}
        onUpdate={onHandleUpdateSection}
        onPublish={publishToggleSection}
      />
    </Box>
  );
}
