import {
  BaseBlockCutDownFormProps,
  IBaseBlock,
  IBlockInfoPage,
} from '../types';

export type ReviewFormProps = BaseBlockCutDownFormProps<IReviewSectionFormData>;

export interface IReviewSectionFormData extends IBaseBlock {}

export interface IReviewFormBlockFullData
  extends IReviewSectionFormData,
    IBlockInfoPage {}
