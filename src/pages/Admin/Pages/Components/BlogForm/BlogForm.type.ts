import { BaseBlockFormProps, IBaseBlock, IBlockInfoPage } from '../types';

export type BlogFormProps = BaseBlockFormProps<IBlogFormData>;

export interface IBlogFormData extends IBaseBlock {
  heading: string;
  post_number?: number | null;
}

export interface IBlogBlockFullData extends IBlogFormData, IBlockInfoPage {}
