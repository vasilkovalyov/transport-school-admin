import { BaseBlockFormProps, IBaseBlock } from '../types';

export type HeroFormProps = BaseBlockFormProps<IHeroFormData>;

export interface IHeroFormData extends IBaseBlock {
  image?: string;
  heading: string;
  subheading: string;
  use_link_to_contact_page: boolean;
  use_phone_cta: boolean;
}
