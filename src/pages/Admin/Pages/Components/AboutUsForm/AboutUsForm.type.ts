export type AboutUsFormProps = {
  data?: IAboutUsFormData;
  onSubmit?: (data: IAboutUsFormData) => void;
};

export interface IAboutUsFormData {
  image?: string;
  heading: string;
  rich_text: string;
}
