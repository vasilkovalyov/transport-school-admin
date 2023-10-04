import { BaseBlockFormProps, IBaseBlock } from '../types';

export type RequirementFormProps = BaseBlockFormProps<IRequirementFormData>;

export interface IRequirementFormData extends IBaseBlock {
  heading: string;
  requirement_list: IRequirementItem[];
}

export interface IRequirementItem {
  id?: string;
  image?: string;
  heading: string;
  text: string;
}
