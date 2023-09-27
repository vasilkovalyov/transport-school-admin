export type FaqFormProps = {
  data?: IFaqFormData;
  onSubmit?: (data: IFaqFormData) => void;
};

export interface IFaqFormData {
  heading: string;
  list_faq: IFaq[];
}
export interface IFaq {
  id?: string;
  heading: string;
  text: string;
}
