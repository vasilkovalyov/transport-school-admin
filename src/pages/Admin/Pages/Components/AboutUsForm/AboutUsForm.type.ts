import { BaseBlockFormProps, BaseBlockType, BlockInfoPageType } from '../types';

export type AboutUsFormProps = BaseBlockFormProps<AboutUsFormDataType>;

export type AboutUsFormDataType = BaseBlockType & {
  image?: string;
  heading: string;
  rich_text?: string;
};

export type AboutUsBlockFullDataType = AboutUsFormDataType & BlockInfoPageType;
