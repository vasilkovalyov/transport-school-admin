import {
  BaseBlockCutDownFormProps,
  BaseBlockType,
  BlockInfoPageType,
} from '../types';

export type FaqFormProps = BaseBlockCutDownFormProps<FaqSectionFormDataType>;

export type FaqSectionFormDataType = BaseBlockType;

export type IFaqFormBlockFullData = FaqSectionFormDataType & BlockInfoPageType;
