import {
  BaseBlockCutDownFormProps,
  BaseBlockType,
  BlockInfoPageType,
} from '../types';

export type ContactsFormProps =
  BaseBlockCutDownFormProps<ContactsSectionFormDataType>;

export type ContactsSectionFormDataType = BaseBlockType;

export type ContactsBlockFullDataType = ContactsSectionFormDataType &
  BlockInfoPageType;
