export type RequirementFormProps = {
  data?: IRequirementFormData;
  onSubmit?: (data: IRequirementFormData) => void;
};

export interface IRequirementFormData {
  heading: string;
}
