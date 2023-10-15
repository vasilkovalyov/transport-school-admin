import { BaseBlockFormProps, IBaseBlock, IBlockInfoPage } from '../types';

export type FormatLessonsFormProps = BaseBlockFormProps<IFormatLessonsFormData>;

export interface IFormatLessonsFormData extends IBaseBlock {
  heading: string;
  rich_text?: string;
  use_dark_theme?: boolean;
}

export interface IFormatLessonsBlockFullData
  extends IFormatLessonsFormData,
    IBlockInfoPage {}

export type FormatLessonsSectionCheckboxTypes = Pick<
  IFormatLessonsFormData,
  'use_dark_theme'
>;
