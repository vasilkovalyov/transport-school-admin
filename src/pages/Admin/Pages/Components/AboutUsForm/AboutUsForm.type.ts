import { BaseBlockFormProps, IBaseBlock } from '../types';
export type AboutUsFormProps = BaseBlockFormProps<IAboutUsFormData>;

export interface IAboutUsFormData extends IBaseBlock {
  image?: string;
  heading: string;
  rich_text: string;
}
