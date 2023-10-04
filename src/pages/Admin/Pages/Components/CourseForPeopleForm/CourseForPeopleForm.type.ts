import { BaseBlockFormProps, IBaseBlock } from '../types';

export type CourseForPeopleFormProps =
  BaseBlockFormProps<ICourseForPeopleFormData>;

export interface ICourseForPeopleFormData extends IBaseBlock {
  heading: string;
  rich_text: string;
}
