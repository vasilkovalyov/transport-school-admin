import { BaseBlockFormProps, IBaseBlock, IBlockInfoPage } from '../types';

export type FaqFormProps = BaseBlockFormProps<IFaqFormData>;

export interface IFaqFormData extends IBaseBlock {}

export interface IFaqFormBlockFullData extends IFaqFormData, IBlockInfoPage {}
