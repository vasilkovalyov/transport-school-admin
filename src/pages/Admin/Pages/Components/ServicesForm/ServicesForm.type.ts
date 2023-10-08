import { BaseBlockFormProps, IBaseBlock, IBlockInfoPage } from '../types';

export type ServicesFormProps = BaseBlockFormProps<IServicesFormData>;

export interface IServicesFormData extends IBaseBlock {
  heading: string;
  subheading?: string;
}

export interface IServicesBlockFullData
  extends IServicesFormData,
    IBlockInfoPage {}
