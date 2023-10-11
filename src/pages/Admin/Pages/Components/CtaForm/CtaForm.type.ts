import {
  BaseBlockCutDownFormProps,
  IBaseBlock,
  IBlockInfoPage,
} from '../types';

export type CtaFormProps = BaseBlockCutDownFormProps<ICtaSectionFormData>;

export interface ICtaSectionFormData extends IBaseBlock {}

export interface ICtaFormBlockFullData
  extends ICtaSectionFormData,
    IBlockInfoPage {}
