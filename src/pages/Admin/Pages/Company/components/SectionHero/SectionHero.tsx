import { Box } from '@mui/material';

import {
  HeroForm,
  HeroBlockFullDataType,
  HeroFormDataType,
  HeroFormService,
  BlockHeading,
} from '@/src/pages/Admin/Pages/Components';
import { PageEnum } from '@/src/pages/Admin/Pages/pages-enum';
import { BlockInfoPageType } from '@/src/pages/Admin/Pages/Components/types';
import { useApisBlock } from '@/src/pages/Admin/Pages/hooks/useApisBlock';
import { BlocsEnum } from '@/src/pages/Admin/Pages/blocks-enum';

const service = new HeroFormService();
const currentPage = PageEnum.COMPANY;

const blockInfoPage: BlockInfoPageType = {
  block_order: 0,
  block_page: currentPage,
  block_name: BlocsEnum.BlockHero,
};

const getAdapterSectionParams = (
  params: HeroFormDataType,
  additionalParams: BlockInfoPageType
): HeroBlockFullDataType => {
  const { publish, ...props } = params;
  return {
    ...props,
    ...additionalParams,
  };
};

export default function SectionHero() {
  const {
    data,
    loadingType,
    loadingForPublishLabel,
    updateSection,
    createSection,
    publishToggleSection,
  } = useApisBlock<HeroBlockFullDataType>({
    page: currentPage,
    service: service,
    blockInfoPage: blockInfoPage,
  });

  function onHandleCreateSection(params: HeroFormDataType) {
    createSection(getAdapterSectionParams(params, blockInfoPage));
  }

  function onHandleUpdateSection(params: HeroFormDataType) {
    updateSection(getAdapterSectionParams(params, blockInfoPage));
  }

  return (
    <Box>
      <BlockHeading
        heading="Section hero"
        loading={loadingForPublishLabel}
        publish={data?.publish}
      />
      <HeroForm
        data={data}
        loadingType={loadingType}
        onCreate={onHandleCreateSection}
        onUpdate={onHandleUpdateSection}
        onPublish={publishToggleSection}
      />
    </Box>
  );
}
