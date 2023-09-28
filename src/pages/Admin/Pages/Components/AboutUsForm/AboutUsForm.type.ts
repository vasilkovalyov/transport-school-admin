export type AboutUsFormProps = {
  data?: IAboutUsFormData;
  onSubmit?: (data: IAboutUsFormData) => void;
};

export interface IAboutUsFormData {
  heading: string;
}
