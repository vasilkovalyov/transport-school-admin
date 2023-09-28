import { AboutCourseFormProps } from './AboutCourseForm.type';

export default function AboutCourseForm({
  data,
  onSubmit,
}: AboutCourseFormProps) {
  console.log(data);
  if (data) {
    onSubmit && onSubmit(data);
  }
  return <div>About course form</div>;
}
