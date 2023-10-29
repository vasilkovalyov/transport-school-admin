import { BaseBlockFormProps, BaseBlockType, BlockInfoPageType } from '../types';
export type AboutFormProps = BaseBlockFormProps<AboutFormDataType>;

export type AboutFormDataType = BaseBlockType & {
  heading: string;
  rich_text?: string;
};

export type AboutBlockFullDataType = AboutFormDataType & BlockInfoPageType;
