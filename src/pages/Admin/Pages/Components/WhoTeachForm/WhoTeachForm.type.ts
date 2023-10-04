import { BaseBlockFormProps, IBaseBlock } from '../types';

export type WhoTeachFormProps = BaseBlockFormProps<IWhoTeachFormData>;

export interface IWhoTeachFormData extends IBaseBlock {
  image?: string;
  heading: string;
  rich_text: string;
}
