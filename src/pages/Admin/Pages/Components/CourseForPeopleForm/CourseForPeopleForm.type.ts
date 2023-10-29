import { BaseBlockFormProps, BaseBlockType, BlockInfoPageType } from '../types';

export type CourseForPeopleFormProps =
  BaseBlockFormProps<CourseForPeopleFormDataType>;

export type CourseForPeopleFormDataType = BaseBlockType & {
  heading: string;
  rich_text?: string;
};

export type CourseForPeopleFullDataType = CourseForPeopleFormDataType &
  BlockInfoPageType;
