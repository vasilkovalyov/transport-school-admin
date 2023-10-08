import { BaseBlockFormProps, IBaseBlock, IBlockInfoPage } from '../types';

export type RequirementFormProps = BaseBlockFormProps<IRequirementFormData>;

export interface IRequirementFormData extends IBaseBlock {
  heading: string;
  requirements_list?: IRequirementItem[];
}

export interface IRequirementItem {
  id?: string;
  image?: string;
  heading: string;
  text: string;
}

export interface IRequirementBlockFullData
  extends IRequirementFormData,
    IBlockInfoPage {}
