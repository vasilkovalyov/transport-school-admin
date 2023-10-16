import { IReview } from '../ReviewRow';

export type ReviewFormProps = {
  data?: IReviewFormData;
  loadingSubmit?: boolean;
  onSubmit?: (data: IReviewFormData) => void;
};

export interface IReviewFormData extends Omit<IReview, '_id'> {}
