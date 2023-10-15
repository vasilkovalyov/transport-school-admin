import { IServiceFormData } from '../ServiceForm';

export type ServiceRowProps = Pick<IServiceFormData, 'heading' | 'price'> & {
  _id: string;
};

export type FormValuesKey = keyof Omit<ServiceRowProps, '_id'>;
