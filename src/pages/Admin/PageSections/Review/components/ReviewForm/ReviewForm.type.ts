import { IReview } from '../ReviewRow';

export type ReviewFormProps = {
  data?: IReviewFormData;
  onSubmit?: (data: IReviewFormData) => void;
};

export interface IReviewFormData extends Omit<IReview, '_id'> {}
