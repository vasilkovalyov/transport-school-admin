import { Box } from '@mui/material';

import {
  ReviewForm,
  ReviewFormService,
  IReviewBlockFullData,
  IReviewFormData,
  BlockHeading,
} from '@/src/pages/Admin/Pages/Components';
import { PageEnum } from '@/src/pages/Admin/Pages/pages-enum';
import { IBlockInfoPage } from '@/src/pages/Admin/Pages/Components/types';
import { useApisBlock } from '@/src/pages/Admin/Pages/hooks/useApisBlock';
import { BlocsEnum } from '@/src/pages/Admin/Pages/blocks-enum';

const service = new ReviewFormService();
const currentPage = PageEnum.COMPANY;

const blockInfoPage: IBlockInfoPage = {
  block_order: 0,
  block_page: currentPage,
  block_name: BlocsEnum.BlockReview,
};

const getAdapterSectionParams = (
  params: IReviewFormData,
  additionalParams: IBlockInfoPage
): IReviewBlockFullData => {
  return {
    ...params,
    ...additionalParams,
  };
};

export default function SectionReview() {
  const { data, updateSection, createSection, publishToggleSection } =
    useApisBlock<IReviewBlockFullData>({
      page: currentPage,
      service: service,
      blockInfoPage: blockInfoPage,
    });

  function onHandleCreateSection(params: IReviewFormData) {
    createSection(getAdapterSectionParams(params, blockInfoPage));
  }

  function onHandleUpdateSection(params: IReviewFormData) {
    updateSection(getAdapterSectionParams(params, blockInfoPage));
  }

  return (
    <Box>
      <BlockHeading heading="Section reviews" publish={data?.publish} />
      <ReviewForm
        data={data}
        onCreate={onHandleCreateSection}
        onUpdate={onHandleUpdateSection}
        onPublish={publishToggleSection}
      />
    </Box>
  );
}
