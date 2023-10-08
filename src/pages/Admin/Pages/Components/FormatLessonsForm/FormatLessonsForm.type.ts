import { BaseBlockFormProps, IBaseBlock, IBlockInfoPage } from '../types';

export type FormatLessonsFormProps = BaseBlockFormProps<IFormatLessonsFormData>;

export interface IFormatLessonsFormData extends IBaseBlock {
  heading: string;
  rich_text?: string;
}

export interface IFormatLessonsBlockFullData
  extends IFormatLessonsFormData,
    IBlockInfoPage {}
