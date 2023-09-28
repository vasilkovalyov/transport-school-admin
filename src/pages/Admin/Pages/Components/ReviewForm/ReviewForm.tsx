import { ReviewFormProps } from './ReviewForm.type';

export default function ReviewForm({ data, onSubmit }: ReviewFormProps) {
  console.log(data);
  if (data) {
    onSubmit && onSubmit(data);
  }
  return <div>Review form</div>;
}
