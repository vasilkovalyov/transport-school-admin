export interface IFaqSectionFormData {
  image?: string;
  heading: string;
  list_faq: IFaq[];
}

export interface IFaq {
  id?: string;
  heading: string;
  text: string;
}
