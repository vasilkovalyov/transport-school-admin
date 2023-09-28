export type AboutFormProps = {
  data?: IAboutFormData;
  onSubmit?: (data: IAboutFormData) => void;
};

export interface IAboutFormData {
  heading: string;
}
