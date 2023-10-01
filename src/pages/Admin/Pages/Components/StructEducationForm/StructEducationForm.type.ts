export type StructEducationFormProps = {
  data?: IStructEducationFormData;
  onSubmit?: (data: IStructEducationFormData) => void;
};

export interface IStructEducationFormData {
  heading: string;
  struct_education_list: IStructEducationData[];
}

export interface IStructEducationData {
  id?: string;
  heading: string;
  rich_text: string;
}
