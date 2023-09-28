export type FaqFormProps = {
  data?: IFaqFormData;
  onSubmit?: (data: IFaqFormData) => void;
};

export interface IFaqFormData {
  image?: string;
  heading: string;
  list_faq: IFaq[];
}
export interface IFaq {
  id?: string;
  heading: string;
  text: string;
}
