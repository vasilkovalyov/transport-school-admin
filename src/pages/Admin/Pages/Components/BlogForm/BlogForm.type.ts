import { BaseBlockFormProps, IBaseBlock } from '../types';

export type BlogFormProps = BaseBlockFormProps<IBlogFormData>;

export interface IBlogFormData extends IBaseBlock {
  heading: string;
  post_number: number | null;
}
