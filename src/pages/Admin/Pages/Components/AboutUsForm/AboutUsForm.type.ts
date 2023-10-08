import { BaseBlockFormProps, IBaseBlock, IBlockInfoPage } from '../types';

export type AboutUsFormProps = BaseBlockFormProps<IAboutUsFormData>;

export interface IAboutUsFormData extends IBaseBlock {
  image?: string;
  heading: string;
  rich_text?: string;
}

export interface IAboutUsBlockFullData
  extends IAboutUsFormData,
    IBlockInfoPage {}
