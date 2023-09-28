export type BlogFormProps = {
  data?: IBlogFormData;
  onSubmit?: (data: IBlogFormData) => void;
};

export interface IBlogFormData {
  heading: string;
}
