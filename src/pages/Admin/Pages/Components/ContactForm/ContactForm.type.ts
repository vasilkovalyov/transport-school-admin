export type ContactFormProps = {
  data?: IContactFormData;
  onSubmit?: (data: IContactFormData) => void;
};

export interface IContactFormData {
  image?: string;
  heading: string;
  rich_text: string;
  form_heading: string;
  require_message: string;
}
