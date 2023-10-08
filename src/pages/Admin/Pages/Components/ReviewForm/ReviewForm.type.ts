import { BaseBlockFormProps, IBaseBlock, IBlockInfoPage } from '../types';

export type ReviewFormProps = BaseBlockFormProps<IReviewFormData>;

export interface IReviewFormData extends IBaseBlock {
  heading: string;
}

export interface IReviewBlockFullData extends IReviewFormData, IBlockInfoPage {}
