import { Box } from '@mui/material';

import {
  OurBenefitsForm,
  OurBenefitsFormService,
  IOurBenefitsBlockFullData,
  IOurBenefitsFormData,
  BlockHeading,
} from '@/src/pages/Admin/Pages/Components';
import { PageEnum } from '@/src/pages/Admin/Pages/pages-enum';
import { IBlockInfoPage } from '@/src/pages/Admin/Pages/Components/types';
import { useApisBlock } from '@/src/pages/Admin/Pages/hooks/useApisBlock';
import { BlocsEnum } from '@/src/pages/Admin/Pages/blocks-enum';

const service = new OurBenefitsFormService();
const currentPage = PageEnum.ABOUT_COURSE;

const blockInfoPage: IBlockInfoPage = {
  block_order: 0,
  block_page: currentPage,
  block_name: BlocsEnum.BlockOurBenefits,
};

const getAdapterSectionParams = (
  params: IOurBenefitsFormData,
  additionalParams: IBlockInfoPage
): IOurBenefitsBlockFullData => {
  return {
    ...params,
    ...additionalParams,
  };
};

export default function SectionOurBenefits() {
  const { data, updateSection, createSection, publishToggleSection } =
    useApisBlock<IOurBenefitsBlockFullData>({
      page: currentPage,
      service: service,
      blockInfoPage: blockInfoPage,
    });

  function onHandleCreateSection(params: IOurBenefitsFormData) {
    createSection(getAdapterSectionParams(params, blockInfoPage));
  }

  function onHandleUpdateSection(params: IOurBenefitsFormData) {
    updateSection(getAdapterSectionParams(params, blockInfoPage));
  }

  return (
    <Box>
      <BlockHeading heading="Section our benefits" publish={data?.publish} />
      <OurBenefitsForm
        data={data}
        onUpdate={onHandleUpdateSection}
        onCreate={onHandleCreateSection}
        onPublish={publishToggleSection}
      />
    </Box>
  );
}
