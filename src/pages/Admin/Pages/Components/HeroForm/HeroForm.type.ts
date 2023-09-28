export type HeroFormProps = {
  data?: IHeroFormData;
  onSubmit?: (data: IHeroFormData) => void;
};

export interface IHeroFormData {
  heading: string;
}
