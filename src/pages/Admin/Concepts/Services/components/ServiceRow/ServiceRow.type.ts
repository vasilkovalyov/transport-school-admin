import { IServiceFormData } from '../ServiceForm';

export type ServiceRowProps = Pick<
  IServiceFormData,
  'heading' | 'price' | 'image'
> & {
  _id: string;
};
