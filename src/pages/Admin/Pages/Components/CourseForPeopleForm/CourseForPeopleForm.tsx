import { CourseForPeopleFormProps } from './CourseForPeopleForm.type';

export default function CourseForPeopleForm({
  data,
  onSubmit,
}: CourseForPeopleFormProps) {
  console.log(data);
  if (data) {
    onSubmit && onSubmit(data);
  }
  return <div>Course for people form</div>;
}
