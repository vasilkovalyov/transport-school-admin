import { BaseBlockFormProps, IBaseBlock, IBlockInfoPage } from '../types';

export type FaqFormProps = BaseBlockFormProps<IFaqSectionFormData>;

export interface IFaqSectionFormData extends IBaseBlock {}

export interface IFaqFormBlockFullData
  extends IFaqSectionFormData,
    IBlockInfoPage {}
