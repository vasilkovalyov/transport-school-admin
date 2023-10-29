import {
  BaseBlockCutDownFormProps,
  BaseBlockType,
  BlockInfoPageType,
} from '../types';

export type ReviewFormProps =
  BaseBlockCutDownFormProps<ReviewSectionFormDataType>;

export type ReviewSectionFormDataType = BaseBlockType;

export type ReviewFormBlockFullDataType = ReviewSectionFormDataType &
  BlockInfoPageType;
