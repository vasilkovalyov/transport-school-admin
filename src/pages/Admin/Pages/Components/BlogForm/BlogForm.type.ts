export type BlogFormProps = {
  data?: IBlogFormData;
  onSubmit?: (data: IBlogFormData) => void;
};

export interface IBlogFormData {
  heading: string;
  post_number: number | null;
  publish: boolean;
}
