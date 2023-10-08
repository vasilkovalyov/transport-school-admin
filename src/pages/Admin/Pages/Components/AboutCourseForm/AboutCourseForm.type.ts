import { BaseBlockFormProps, IBaseBlock, IBlockInfoPage } from '../types';
export type AboutCourseFormProps = BaseBlockFormProps<IAboutCourseFormData>;

export interface IAboutCourseFormData extends IBaseBlock {
  image?: string;
  heading: string;
  rich_text?: string;
}

export interface IAboutCourseBlockFullData
  extends IAboutCourseFormData,
    IBlockInfoPage {}
