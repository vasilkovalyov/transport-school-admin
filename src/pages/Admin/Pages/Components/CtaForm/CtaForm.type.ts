import {
  BaseBlockCutDownFormProps,
  BaseBlockType,
  BlockInfoPageType,
} from '../types';

export type CtaFormProps = BaseBlockCutDownFormProps<CtaSectionFormDataType>;

export type CtaSectionFormDataType = BaseBlockType;

export type CtaFormBlockFullDataType = CtaSectionFormDataType &
  BlockInfoPageType;
