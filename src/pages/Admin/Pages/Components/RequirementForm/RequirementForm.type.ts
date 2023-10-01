export type RequirementFormProps = {
  data?: IRequirementFormData;
  onSubmit?: (data: IRequirementFormData) => void;
};

export interface IRequirementFormData {
  heading: string;
  requirement_list: IRequirementItem[];
}

export interface IRequirementItem {
  id?: string;
  image?: string;
  heading: string;
  text: string;
}
