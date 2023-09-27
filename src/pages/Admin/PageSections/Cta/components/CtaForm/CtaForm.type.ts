export type CtaFormProps = {
  data?: ICtaFormData;
  onSubmit?: (data: ICtaFormData) => void;
};

export interface ICtaFormData {
  heading: string;
  use_link_to_contact_page: boolean;
  use_phone_cta: boolean;
}
