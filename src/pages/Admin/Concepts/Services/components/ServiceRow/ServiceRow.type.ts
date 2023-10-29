import { ServiceFormDataType } from '../ServiceForm';

export type ServiceRowProps = Pick<
  ServiceFormDataType,
  'heading' | 'price' | 'image'
> & {
  _id: string;
};
