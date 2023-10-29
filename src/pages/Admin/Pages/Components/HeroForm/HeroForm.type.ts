import { BaseBlockFormProps, BaseBlockType, BlockInfoPageType } from '../types';

export type HeroFormProps = BaseBlockFormProps<HeroFormDataType>;

export type HeroFormDataType = BaseBlockType & {
  image?: string;
  heading: string;
  subheading?: string;
  use_link_to_contact_page?: boolean;
  use_phone_cta?: boolean;
};

export type HeroFormCheckboxFields =
  | 'use_link_to_contact_page'
  | 'use_phone_cta';
export type HeroFormCheckboxTypes = Pick<
  HeroFormDataType,
  HeroFormCheckboxFields
>;
export type HeroFormFieldsNecessary = Omit<
  HeroFormDataType,
  HeroFormCheckboxFields
>;

export type HeroBlockFullDataType = HeroFormDataType & BlockInfoPageType;
