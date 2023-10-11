import {
  BaseBlockCutDownFormProps,
  IBaseBlock,
  IBlockInfoPage,
} from '../types';

export type ContactsFormProps =
  BaseBlockCutDownFormProps<IContactsSectionFormData>;

export interface IContactsSectionFormData extends IBaseBlock {}

export interface IContactsBlockFullData
  extends IContactsSectionFormData,
    IBlockInfoPage {}
