import { BaseBlockFormProps, IBaseBlock } from '../types';

export type FormatLessonsFormProps = BaseBlockFormProps<IFormatLessonsFormData>;

export interface IFormatLessonsFormData extends IBaseBlock {
  heading: string;
  subheading: string;
}
