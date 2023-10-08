import { Box } from '@mui/material';

import {
  ServicesForm,
  ServicesFormService,
  IServicesBlockFullData,
  IServicesFormData,
  BlockHeading,
} from '@/src/pages/Admin/Pages/Components';
import { PageEnum } from '@/src/pages/Admin/Pages/pages-enum';
import { IBlockInfoPage } from '@/src/pages/Admin/Pages/Components/types';
import { useApisBlock } from '@/src/pages/Admin/Pages/hooks/useApisBlock';
import { BlocsEnum } from '@/src/pages/Admin/Pages/blocks-enum';

const service = new ServicesFormService();
const currentPage = PageEnum.PRICE;

const blockInfoPage: IBlockInfoPage = {
  block_order: 0,
  block_page: currentPage,
  block_name: BlocsEnum.BlockServices,
};

const getAdapterSectionParams = (
  params: IServicesFormData,
  additionalParams: IBlockInfoPage
): IServicesBlockFullData => {
  return {
    ...params,
    ...additionalParams,
  };
};

export default function SectionServices() {
  const { data, updateSection, createSection, publishToggleSection } =
    useApisBlock<IServicesBlockFullData>({
      page: currentPage,
      service: service,
      blockInfoPage: blockInfoPage,
    });

  function onHandleCreateSection(params: IServicesFormData) {
    createSection(getAdapterSectionParams(params, blockInfoPage));
  }

  function onHandleUpdateSection(params: IServicesFormData) {
    updateSection(getAdapterSectionParams(params, blockInfoPage));
  }

  return (
    <Box>
      <BlockHeading heading="Section services" publish={data?.publish} />
      <ServicesForm
        data={data}
        onCreate={onHandleCreateSection}
        onUpdate={onHandleUpdateSection}
        onPublish={publishToggleSection}
      />
    </Box>
  );
}
