import { BaseBlockFormProps, IBaseBlock, IBlockInfoPage } from '../types';

export type CourseForPeopleFormProps =
  BaseBlockFormProps<ICourseForPeopleFormData>;

export interface ICourseForPeopleFormData extends IBaseBlock {
  heading: string;
  rich_text?: string;
}

export interface ICourseForPeopleFullData
  extends ICourseForPeopleFormData,
    IBlockInfoPage {}
