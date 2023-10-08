import { BaseBlockFormProps, IBaseBlock, IBlockInfoPage } from '../types';

export type OurBenefitsFormProps = BaseBlockFormProps<IOurBenefitsFormData>;

export interface IOurBenefitsFormData extends IBaseBlock {
  image?: string;
  heading: string;
  rich_text?: string;
}

export interface IOurBenefitsBlockFullData
  extends IOurBenefitsFormData,
    IBlockInfoPage {}
