export interface IFaqSectionFormData {
  image?: string;
  heading: string;
  list_faq: IFaq[];
}

export interface IFaq {
  _id?: string;
  heading: string;
  rich_text: string;
}

export type FaqRichTextType = Omit<IFaq, 'heading'>;
