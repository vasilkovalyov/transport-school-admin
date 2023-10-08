import { BaseBlockReusableFormProps } from '../../../types';

export type FaqFormProps = BaseBlockReusableFormProps<IFaqFormData>;

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
