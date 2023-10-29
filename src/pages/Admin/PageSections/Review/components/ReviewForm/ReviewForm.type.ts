import { ReviewType } from '../ReviewRow';

export type ReviewFormProps = {
  data?: ReviewFormDataType;
  loadingSubmit?: boolean;
  onSubmit?: (data: ReviewFormDataType) => void;
};

export type ReviewFormDataType = Omit<ReviewType, '_id'>;
