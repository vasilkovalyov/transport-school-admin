export type FaqSectionFormDataType = {
  image?: string;
  heading: string;
  list_faq?: FaqType[];
};

export type FaqType = {
  _id?: string;
  heading: string;
  rich_text: string;
};

export type FaqRichTextType = Omit<FaqType, 'heading'>;
