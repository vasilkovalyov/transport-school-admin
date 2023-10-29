import { BaseBlockFormProps, BaseBlockType, BlockInfoPageType } from '../types';

export type FormatLessonsFormProps =
  BaseBlockFormProps<FormatLessonsFormDataType>;

export type FormatLessonsFormDataType = BaseBlockType & {
  heading: string;
  rich_text?: string;
  use_dark_theme?: boolean;
};

export type FormatLessonsBlockFullDataType = FormatLessonsFormDataType &
  BlockInfoPageType;

export type FormatLessonsSectionCheckboxTypes = Pick<
  FormatLessonsFormDataType,
  'use_dark_theme'
>;
