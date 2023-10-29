import { BaseBlockFormProps, BaseBlockType, BlockInfoPageType } from '../types';

export type ScheduleFormProps = BaseBlockFormProps<ScheduleFormDataType>;

export type ScheduleFormDataType = BaseBlockType & {
  heading: string;
  post_number?: number | null;
};

export type ScheduleBlockFullDataType = ScheduleFormDataType &
  BlockInfoPageType;
