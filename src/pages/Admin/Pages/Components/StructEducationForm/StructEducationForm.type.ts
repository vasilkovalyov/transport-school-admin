export type StructEducationFormProps = {
  data?: IStructEducationFormData;
  onSubmit?: (data: IStructEducationFormData) => void;
};

export interface IStructEducationFormData {
  heading: string;
}
