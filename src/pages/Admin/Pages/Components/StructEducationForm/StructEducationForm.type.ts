import { BaseBlockFormProps, IBaseBlock, IBlockInfoPage } from '../types';

export type StructEducationFormProps =
  BaseBlockFormProps<IStructEducationFormData>;

export interface IStructEducationFormData extends IBaseBlock {
  heading: string;
  struct_education_list?: IStructEducationData[];
}

export interface IStructEducationData {
  _id?: string;
  heading: string;
  rich_text: string;
}

export type StructEducationRichTextType = Omit<IStructEducationData, 'heading'>;

export interface IStructEducationBlockFullData
  extends IStructEducationFormData,
    IBlockInfoPage {}
