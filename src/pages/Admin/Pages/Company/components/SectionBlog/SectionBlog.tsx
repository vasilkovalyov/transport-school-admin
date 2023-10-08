import { Box } from '@mui/material';

import {
  BlogForm,
  BlogFormService,
  IBlogBlockFullData,
  IBlogFormData,
  BlockHeading,
} from '@/src/pages/Admin/Pages/Components';
import { PageEnum } from '@/src/pages/Admin/Pages/pages-enum';
import { IBlockInfoPage } from '@/src/pages/Admin/Pages/Components/types';
import { useApisBlock } from '@/src/pages/Admin/Pages/hooks/useApisBlock';
import { BlocsEnum } from '@/src/pages/Admin/Pages/blocks-enum';

const service = new BlogFormService();
const currentPage = PageEnum.COMPANY;

const blockInfoPage: IBlockInfoPage = {
  block_order: 0,
  block_page: currentPage,
  block_name: BlocsEnum.BlockBlog,
};

const getAdapterSectionParams = (
  params: IBlogFormData,
  additionalParams: IBlockInfoPage
): IBlogBlockFullData => {
  return {
    ...params,
    ...additionalParams,
  };
};

export default function SectionBlog() {
  const { data, updateSection, createSection, publishToggleSection } =
    useApisBlock<IBlogBlockFullData>({
      page: currentPage,
      service: service,
      blockInfoPage: blockInfoPage,
    });

  function onHandleCreateSection(params: IBlogFormData) {
    createSection(getAdapterSectionParams(params, blockInfoPage));
  }

  function onHandleUpdateSection(params: IBlogFormData) {
    updateSection(getAdapterSectionParams(params, blockInfoPage));
  }

  return (
    <Box>
      <BlockHeading heading="Section blog" publish={data?.publish} />
      <BlogForm
        data={data}
        onCreate={onHandleCreateSection}
        onUpdate={onHandleUpdateSection}
        onPublish={publishToggleSection}
      />
    </Box>
  );
}
