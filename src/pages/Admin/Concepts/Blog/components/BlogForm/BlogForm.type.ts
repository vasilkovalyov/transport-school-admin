export type BlogFormProps = {
  data?: IBlogFormData;
  onSubmit?: (data: IBlogFormData) => void;
};

export interface IBlogFormData {
  image?: string;
  heading: string;
  slug: string;
  short_description: string;
  rich_text: string;
}
