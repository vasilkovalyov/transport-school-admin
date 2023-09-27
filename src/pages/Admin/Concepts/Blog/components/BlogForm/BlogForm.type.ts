export type BlogFormProps = {
  data?: IBlogFormData;
  onSubmit?: (data: IBlogFormData) => void;
};

export interface IBlogFormData {
  heading: string;
  slug: string;
  short_description: string;
  richText: string;
}
