export type ContactFormProps = {
  data?: IContactFormData;
  onSubmit?: (data: IContactFormData) => void;
};

export interface IContactFormData {
  isShow: boolean;
}
