import { BaseBlockFormProps, IBaseBlock } from '../types';

export type TeamEducationFormProps = BaseBlockFormProps<ITeamEducationFormData>;

export interface ITeamEducationFormData extends IBaseBlock {
  heading: string;
  subheading: string;
  use_cta_link?: boolean;
  education_list: ITeamEducationData[];
}

export interface ITeamEducationData {
  id?: string;
  heading: string;
  type: string;
  discount: string;
}
