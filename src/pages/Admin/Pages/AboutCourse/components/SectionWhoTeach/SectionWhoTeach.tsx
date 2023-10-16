import { Box } from '@mui/material';

import {
  WhoTeachForm,
  WhoTeachFormService,
  IWhoTeachBlockFullData,
  IWhoTeachFormData,
  BlockHeading,
} from '@/src/pages/Admin/Pages/Components';
import { PageEnum } from '@/src/pages/Admin/Pages/pages-enum';
import { IBlockInfoPage } from '@/src/pages/Admin/Pages/Components/types';
import { useApisBlock } from '@/src/pages/Admin/Pages/hooks/useApisBlock';
import { BlocsEnum } from '@/src/pages/Admin/Pages/blocks-enum';

const service = new WhoTeachFormService();
const currentPage = PageEnum.ABOUT_COURSE;

const blockInfoPage: IBlockInfoPage = {
  block_order: 4,
  block_page: currentPage,
  block_name: BlocsEnum.BlockWhoTeach,
};

const getAdapterSectionParams = (
  params: IWhoTeachFormData,
  additionalParams: IBlockInfoPage
): IWhoTeachBlockFullData => {
  const { publish, ...props } = params;
  return {
    ...props,
    ...additionalParams,
  };
};

export default function SectionWhoTeach() {
  const {
    data,
    loadingType,
    loadingForPublishLabel,
    updateSection,
    createSection,
    publishToggleSection,
  } = useApisBlock<IWhoTeachBlockFullData>({
    page: currentPage,
    service: service,
    blockInfoPage: blockInfoPage,
  });

  function onHandleCreateSection(params: IWhoTeachFormData) {
    createSection(getAdapterSectionParams(params, blockInfoPage));
  }

  function onHandleUpdateSection(params: IWhoTeachFormData) {
    updateSection(getAdapterSectionParams(params, blockInfoPage));
  }

  return (
    <Box>
      <BlockHeading
        heading="Section who teach"
        loading={loadingForPublishLabel}
        publish={data?.publish}
      />
      <WhoTeachForm
        data={data}
        loadingType={loadingType}
        onCreate={onHandleCreateSection}
        onUpdate={onHandleUpdateSection}
        onPublish={publishToggleSection}
      />
    </Box>
  );
}
