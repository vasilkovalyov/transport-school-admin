import { BaseBlockFormProps, IBaseBlock, IBlockInfoPage } from '../types';

export type ContactsFormProps = BaseBlockFormProps<IContactsFormData>;

export interface IContactsFormData extends IBaseBlock {}

export interface IContactsBlockFullData
  extends IContactsFormData,
    IBlockInfoPage {}
