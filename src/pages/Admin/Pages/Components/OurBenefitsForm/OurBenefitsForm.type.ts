import { BaseBlockFormProps, IBaseBlock } from '../types';

export type OurBenefitsFormProps = BaseBlockFormProps<IOurBenefitsFormData>;

export interface IOurBenefitsFormData extends IBaseBlock {
  image?: string;
  heading: string;
  rich_text: string;
}
