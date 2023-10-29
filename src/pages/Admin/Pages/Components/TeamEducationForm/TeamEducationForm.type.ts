import { BaseBlockFormProps, BaseBlockType, BlockInfoPageType } from '../types';

export type TeamEducationFormProps = BaseBlockFormProps<ITeamEducationFormData>;

export type ITeamEducationFormData = BaseBlockType & {
  heading: string;
  subheading?: string;
  use_cta_link?: boolean;
  education_list?: TeamEducationDataType[];
};

export type TeamEducationDataType = {
  id?: string;
  heading: string;
  type: string;
  discount: string;
};

export type TeamEducationFormCheckboxFields = 'use_cta_link';
export type TeamEducationFormCheckboxTypes = Pick<
  ITeamEducationFormData,
  TeamEducationFormCheckboxFields
>;
export type TeamEducationFormFieldsNecessaryType = Omit<
  ITeamEducationFormData,
  TeamEducationFormCheckboxFields
>;

export type TeamEducationBlockFullDataType = ITeamEducationFormData &
  BlockInfoPageType;
