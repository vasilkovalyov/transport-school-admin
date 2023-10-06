import { Box } from '@mui/material';

import {
  HeroForm,
  HeroFormService,
  IHeroBlockFullData,
  IHeroFormData,
  BlockHeading,
} from '../../../Components';
import { PageEnum } from '../../../pages-enum';
import { IBlockInfoPage } from '../../../Components/types';
import { useApisBlock } from '../../../hooks/useApisBlock';
import { BlocsEnum } from '../../../blocks-enum';

const service = new HeroFormService();
const currentPage = PageEnum.BLOG;

const blockInfoPage: IBlockInfoPage = {
  block_order: 0,
  block_page: currentPage,
  block_name: BlocsEnum.BlockHero,
};

const getAdapterSectionParams = (
  params: IHeroFormData,
  additionalParams: IBlockInfoPage
): IHeroBlockFullData => {
  return {
    ...params,
    ...additionalParams,
  };
};

export default function SectionHero() {
  const { data, updateSection, createSection, publishToggleSection } =
    useApisBlock<IHeroBlockFullData>({
      page: currentPage,
      service: service,
      blockInfoPage: blockInfoPage,
    });

  function onHandleCreateSection(params: IHeroFormData) {
    createSection(getAdapterSectionParams(params, blockInfoPage));
  }

  function onHandleUpdateSection(params: IHeroFormData) {
    updateSection(getAdapterSectionParams(params, blockInfoPage));
  }
  return (
    <Box>
      <BlockHeading heading="Section hero" publish={data?.publish} />
      <HeroForm
        data={data}
        onCreate={onHandleCreateSection}
        onUpdate={onHandleUpdateSection}
        onPublish={publishToggleSection}
      />
    </Box>
  );
}
