export type HeroFormProps = {
  data?: IHeroFormData;
  onSubmit?: (data: IHeroFormData) => void;
};

export interface IHeroFormData {
  image?: string;
  heading: string;
  subheading: string;
  use_link_to_contact_page: boolean;
  use_phone_cta: boolean;
}
