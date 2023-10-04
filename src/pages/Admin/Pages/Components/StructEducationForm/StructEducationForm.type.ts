import { BaseBlockFormProps, IBaseBlock } from '../types';

export type StructEducationFormProps =
  BaseBlockFormProps<IStructEducationFormData>;

export interface IStructEducationFormData extends IBaseBlock {
  heading: string;
  struct_education_list: IStructEducationData[];
}

export interface IStructEducationData {
  id?: string;
  heading: string;
  rich_text: string;
}
