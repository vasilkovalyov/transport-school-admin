import { Box } from '@mui/material';

import {
  ScheduleForm,
  ScheduleFormService,
  IScheduleBlockFullData,
  IScheduleFormData,
  BlockHeading,
} from '@/src/pages/Admin/Pages/Components';
import { PageEnum } from '@/src/pages/Admin/Pages/pages-enum';
import { IBlockInfoPage } from '@/src/pages/Admin/Pages/Components/types';
import { useApisBlock } from '@/src/pages/Admin/Pages/hooks/useApisBlock';
import { BlocsEnum } from '@/src/pages/Admin/Pages/blocks-enum';

const service = new ScheduleFormService();
const currentPage = PageEnum.COMPANY;

const blockInfoPage: IBlockInfoPage = {
  block_order: 0,
  block_page: currentPage,
  block_name: BlocsEnum.BlockSchedule,
};

const getAdapterSectionParams = (
  params: IScheduleFormData,
  additionalParams: IBlockInfoPage
): IScheduleBlockFullData => {
  return {
    ...params,
    ...additionalParams,
  };
};

export default function SectionSchedule() {
  const { data, updateSection, createSection, publishToggleSection } =
    useApisBlock<IScheduleBlockFullData>({
      page: currentPage,
      service: service,
      blockInfoPage: blockInfoPage,
    });

  function onHandleCreateSection(params: IScheduleFormData) {
    createSection(getAdapterSectionParams(params, blockInfoPage));
  }

  function onHandleUpdateSection(params: IScheduleFormData) {
    updateSection(getAdapterSectionParams(params, blockInfoPage));
  }

  return (
    <Box>
      <BlockHeading heading="Section schedule" publish={data?.publish} />
      <ScheduleForm
        data={data}
        onCreate={onHandleCreateSection}
        onUpdate={onHandleUpdateSection}
        onPublish={publishToggleSection}
      />
    </Box>
  );
}
