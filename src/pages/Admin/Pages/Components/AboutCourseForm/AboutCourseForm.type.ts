import { BaseBlockFormProps, IBaseBlock } from '../types';
export type AboutCourseFormProps = BaseBlockFormProps<IAboutCourseFormData>;

export interface IAboutCourseFormData extends IBaseBlock {
  image?: string;
  heading: string;
  rich_text: string;
}
