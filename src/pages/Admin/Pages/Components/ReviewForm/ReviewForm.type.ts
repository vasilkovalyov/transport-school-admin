export type ReviewFormProps = {
  data?: IReviewFormData;
  onSubmit?: (data: IReviewFormData) => void;
};

export interface IReviewFormData {
  heading: string;
  publish: boolean;
}
