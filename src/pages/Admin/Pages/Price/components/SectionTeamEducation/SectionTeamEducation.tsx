import { Box } from '@mui/material';

import {
  TeamEducationForm,
  TeamEducationFormService,
  ITeamEducationBlockFullData,
  ITeamEducationFormData,
  BlockHeading,
} from '@/src/pages/Admin/Pages/Components';
import { PageEnum } from '@/src/pages/Admin/Pages/pages-enum';
import { IBlockInfoPage } from '@/src/pages/Admin/Pages/Components/types';
import { useApisBlock } from '@/src/pages/Admin/Pages/hooks/useApisBlock';
import { BlocsEnum } from '@/src/pages/Admin/Pages/blocks-enum';

const service = new TeamEducationFormService();
const currentPage = PageEnum.PRICE;

const blockInfoPage: IBlockInfoPage = {
  block_order: 2,
  block_page: currentPage,
  block_name: BlocsEnum.BlockTeamEducation,
};

const getAdapterSectionParams = (
  params: ITeamEducationFormData,
  additionalParams: IBlockInfoPage
): ITeamEducationBlockFullData => {
  const { publish, ...props } = params;
  return {
    ...props,
    ...additionalParams,
  };
};

export default function SectionTeamEducation() {
  const { data, updateSection, createSection, publishToggleSection } =
    useApisBlock<ITeamEducationBlockFullData>({
      page: currentPage,
      service: service,
      blockInfoPage: blockInfoPage,
    });

  function onHandleCreateSection(params: ITeamEducationFormData) {
    createSection(getAdapterSectionParams(params, blockInfoPage));
  }

  function onHandleUpdateSection(params: ITeamEducationFormData) {
    updateSection(getAdapterSectionParams(params, blockInfoPage));
  }

  return (
    <Box>
      <BlockHeading heading="Section team education" publish={data?.publish} />
      <TeamEducationForm
        data={data}
        onCreate={onHandleCreateSection}
        onUpdate={onHandleUpdateSection}
        onPublish={publishToggleSection}
      />
    </Box>
  );
}
