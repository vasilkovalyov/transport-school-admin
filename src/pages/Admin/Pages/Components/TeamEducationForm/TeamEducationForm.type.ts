export type TeamEducationFormProps = {
  data?: ITeamEducationFormData;
  onSubmit?: (data: ITeamEducationFormData) => void;
};

export interface ITeamEducationFormData {
  heading: string;
}
