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

export type TeamEducationFormCheckboxFields = 'use_cta_link';
export type TeamEducationFormCheckboxTypes = Pick<
  ITeamEducationFormData,
  TeamEducationFormCheckboxFields
>;
export type TeamEducationFormFieldsNecessary = Omit<
  ITeamEducationFormData,
  TeamEducationFormCheckboxFields
>;

export interface ITeamEducationBlockFullData
  extends ITeamEducationFormData,
    IBlockInfoPage {}
