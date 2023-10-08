import { BaseBlockFormProps, IBaseBlock, IBlockInfoPage } from '../types';

export type HeroFormProps = BaseBlockFormProps<IHeroFormData>;

export interface IHeroFormData extends IBaseBlock {
  image?: string;
  heading: string;
  subheading?: string;
  use_link_to_contact_page?: boolean;
  use_phone_cta?: boolean;
}

export type HeroFormCheckboxFields =
  | 'use_link_to_contact_page'
  | 'use_phone_cta';
export type HeroFormCheckboxTypes = Pick<IHeroFormData, HeroFormCheckboxFields>;
export type HeroFormFieldsNecessary = Omit<
  IHeroFormData,
  HeroFormCheckboxFields
>;

export interface IHeroBlockFullData extends IHeroFormData, IBlockInfoPage {}
