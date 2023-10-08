import { BaseBlockFormProps, IBaseBlock, IBlockInfoPage } from '../types';

export type TeamEducationFormProps = BaseBlockFormProps<ITeamEducationFormData>;

export interface ITeamEducationFormData extends IBaseBlock {
  heading: string;
  subheading?: string;
  use_cta_link?: boolean;
  education_list?: ITeamEducationData[];
}

export interface ITeamEducationData {
  id?: string;
  heading: string;
  type: string;
  discount: string;
}

export type CheckboxFields = 'use_cta_link';
export type CheckboxTypes = Pick<ITeamEducationFormData, CheckboxFields>;
export type FormFieldsNecessary = Omit<ITeamEducationFormData, CheckboxFields>;

export interface ITeamEducationBlockFullData
  extends ITeamEducationFormData,
    IBlockInfoPage {}
