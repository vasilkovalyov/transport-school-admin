import { BaseBlockFormProps, IBaseBlock, IBlockInfoPage } from '../types';
export type AboutFormProps = BaseBlockFormProps<IAboutFormData>;

export interface IAboutFormData extends IBaseBlock {
  heading: string;
  rich_text?: string;
}

export interface IAboutBlockFullData extends IAboutFormData, IBlockInfoPage {}
