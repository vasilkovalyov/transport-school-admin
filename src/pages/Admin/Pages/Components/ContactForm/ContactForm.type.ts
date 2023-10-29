import { BaseBlockFormProps, BaseBlockType, BlockInfoPageType } from '../types';

export type ContactFormProps = BaseBlockFormProps<ContactFormDataType>;

export type ContactFormDataType = BaseBlockType & {
  image?: string;
  heading: string;
  rich_text?: string;
  form_heading?: string;
  require_message?: string;
};

export type ContactBlockFullDataType = ContactFormDataType & BlockInfoPageType;
