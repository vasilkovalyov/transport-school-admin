import { BaseBlockFormProps, IBaseBlock, IBlockInfoPage } from '../types';

export type WhoTeachFormProps = BaseBlockFormProps<IWhoTeachFormData>;

export interface IWhoTeachFormData extends IBaseBlock {
  image?: string;
  heading: string;
  rich_text?: string;
}

export interface IWhoTeachBlockFullData
  extends IWhoTeachFormData,
    IBlockInfoPage {}
