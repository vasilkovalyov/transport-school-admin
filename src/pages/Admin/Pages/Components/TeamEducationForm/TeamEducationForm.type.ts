export type TeamEducationFormProps = {
  data?: ITeamEducationFormData;
  onSubmit?: (data: ITeamEducationFormData) => void;
};

export interface ITeamEducationFormData {
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
