import { BaseBlockFormProps, BaseBlockType, BlockInfoPageType } from '../types';
export type AboutCourseFormProps = BaseBlockFormProps<AboutCourseFormDataType>;

export type AboutCourseFormDataType = BaseBlockType & {
  heading: string;
  rich_text?: string;
};

export type AboutCourseBlockFullDataType = AboutCourseFormDataType &
  BlockInfoPageType;
