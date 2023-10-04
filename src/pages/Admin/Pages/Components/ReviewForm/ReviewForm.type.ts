import { BaseBlockFormProps, IBaseBlock } from '../types';

export type ReviewFormProps = BaseBlockFormProps<IReviewFormData>;

export interface IReviewFormData extends IBaseBlock {
  heading: string;
}
