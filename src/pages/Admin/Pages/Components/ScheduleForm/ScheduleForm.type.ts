import { BaseBlockFormProps, IBaseBlock } from '../types';

export type ScheduleFormProps = BaseBlockFormProps<IScheduleFormData>;

export interface IScheduleFormData extends IBaseBlock {
  heading: string;
  schedule_number: number | null;
}
