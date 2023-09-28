import { FormatLessonsFormProps } from './FormatLessonsForm.type';

export default function FormatLessonsForm({
  data,
  onSubmit,
}: FormatLessonsFormProps) {
  console.log(data);
  if (data) {
    onSubmit && onSubmit(data);
  }
  return <div>Format lessons form</div>;
}
