import { BaseBlockFormProps, IBaseBlock, IBlockInfoPage } from '../types';

export type ScheduleFormProps = BaseBlockFormProps<IScheduleFormData>;

export interface IScheduleFormData extends IBaseBlock {
  heading: string;
  schedule_number?: number | null;
}

export interface IScheduleBlockFullData
  extends IScheduleFormData,
    IBlockInfoPage {}
