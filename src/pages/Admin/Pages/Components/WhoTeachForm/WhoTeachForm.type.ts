import { BaseBlockFormProps, BaseBlockType, BlockInfoPageType } from '../types';

export type WhoTeachFormProps = BaseBlockFormProps<WhoTeachFormDataType>;

export type WhoTeachFormDataType = BaseBlockType & {
  image?: string;
  heading: string;
  rich_text?: string;
};

export type WhoTeachBlockFullDataType = WhoTeachFormDataType &
  BlockInfoPageType;
