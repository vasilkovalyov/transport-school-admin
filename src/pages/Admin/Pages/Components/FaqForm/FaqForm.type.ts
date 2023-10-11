import {
  BaseBlockCutDownFormProps,
  IBaseBlock,
  IBlockInfoPage,
} from '../types';

export type FaqFormProps = BaseBlockCutDownFormProps<IFaqSectionFormData>;

export interface IFaqSectionFormData extends IBaseBlock {}

export interface IFaqFormBlockFullData
  extends IFaqSectionFormData,
    IBlockInfoPage {}
