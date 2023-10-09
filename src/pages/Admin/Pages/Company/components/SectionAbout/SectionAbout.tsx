import { Box } from '@mui/material';

import {
  AboutForm,
  AboutFormService,
  IAboutBlockFullData,
  IAboutFormData,
  BlockHeading,
} from '@/src/pages/Admin/Pages/Components';
import { PageEnum } from '@/src/pages/Admin/Pages/pages-enum';
import { IBlockInfoPage } from '@/src/pages/Admin/Pages/Components/types';
import { useApisBlock } from '@/src/pages/Admin/Pages/hooks/useApisBlock';
import { BlocsEnum } from '@/src/pages/Admin/Pages/blocks-enum';

const service = new AboutFormService();
const currentPage = PageEnum.COMPANY;

const blockInfoPage: IBlockInfoPage = {
  block_order: 1,
  block_page: currentPage,
  block_name: BlocsEnum.BlockAbout,
};

const getAdapterSectionParams = (
  params: IAboutFormData,
  additionalParams: IBlockInfoPage
): IAboutBlockFullData => {
  const { publish, ...props } = params;
  return {
    ...props,
    ...additionalParams,
  };
};

export default function SectionAbout() {
  const { data, updateSection, createSection, publishToggleSection } =
    useApisBlock<IAboutBlockFullData>({
      page: currentPage,
      service: service,
      blockInfoPage: blockInfoPage,
    });

  function onHandleCreateSection(params: IAboutFormData) {
    createSection(getAdapterSectionParams(params, blockInfoPage));
  }

  function onHandleUpdateSection(params: IAboutFormData) {
    updateSection(getAdapterSectionParams(params, blockInfoPage));
  }

  return (
    <Box>
      <BlockHeading heading="Section about" publish={data?.publish} />
      <AboutForm
        data={data}
        onCreate={onHandleCreateSection}
        onUpdate={onHandleUpdateSection}
        onPublish={publishToggleSection}
      />
    </Box>
  );
}
