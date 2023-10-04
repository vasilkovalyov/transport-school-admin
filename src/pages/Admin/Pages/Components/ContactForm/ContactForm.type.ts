import { BaseBlockFormProps, IBaseBlock } from '../types';

export type ContactFormProps = BaseBlockFormProps<IContactFormData>;

export interface IContactFormData extends IBaseBlock {
  image?: string;
  heading: string;
  rich_text: string;
  form_heading: string;
  require_message: string;
}
