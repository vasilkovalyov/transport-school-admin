import { BaseBlockFormProps, IBaseBlock } from '../types';

export type ServicesFormProps = BaseBlockFormProps<IServicesFormData>;

export interface IServicesFormData extends IBaseBlock {
  heading: string;
  subheading: string;
}
