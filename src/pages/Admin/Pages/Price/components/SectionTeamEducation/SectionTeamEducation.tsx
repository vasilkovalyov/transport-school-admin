import { Box } from '@mui/material';

import {
  TeamEducationForm,
  TeamEducationFormService,
  TeamEducationBlockFullDataType,
  ITeamEducationFormData,
  BlockHeading,
} from '@/src/pages/Admin/Pages/Components';
import { PageEnum } from '@/src/pages/Admin/Pages/pages-enum';
import { BlockInfoPageType } from '@/src/pages/Admin/Pages/Components/types';
import { useApisBlock } from '@/src/pages/Admin/Pages/hooks/useApisBlock';
import { BlocsEnum } from '@/src/pages/Admin/Pages/blocks-enum';

const service = new TeamEducationFormService();
const currentPage = PageEnum.PRICE;

const blockInfoPage: BlockInfoPageType = {
  block_order: 2,
  block_page: currentPage,
  block_name: BlocsEnum.BlockTeamEducation,
};

const getAdapterSectionParams = (
  params: ITeamEducationFormData,
  additionalParams: BlockInfoPageType
): TeamEducationBlockFullDataType => {
  const { publish, ...props } = params;
  return {
    ...props,
    ...additionalParams,
  };
};

export default function SectionTeamEducation() {
  const {
    data,
    loadingType,
    loadingForPublishLabel,
    updateSection,
    createSection,
    publishToggleSection,
  } = useApisBlock<TeamEducationBlockFullDataType>({
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
      <BlockHeading
        heading="Section team education"
        loading={loadingForPublishLabel}
        publish={data?.publish}
      />
      <TeamEducationForm
        data={data}
        loadingType={loadingType}
        onCreate={onHandleCreateSection}
        onUpdate={onHandleUpdateSection}
        onPublish={publishToggleSection}
      />
    </Box>
  );
}
