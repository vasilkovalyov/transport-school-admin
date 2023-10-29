import { BaseBlockFormProps, BaseBlockType, BlockInfoPageType } from '../types';

export type OurBenefitsFormProps = BaseBlockFormProps<OurBenefitsFormDataType>;

export type OurBenefitsFormDataType = BaseBlockType & {
  image?: string;
  heading: string;
  rich_text?: string;
};

export type OurBenefitsBlockFullDataType = OurBenefitsFormDataType &
  BlockInfoPageType;
