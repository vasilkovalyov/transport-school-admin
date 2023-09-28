import { AchivmentsFormProps } from './AchivmentsForm.type';

export default function AchivmentsForm({
  data,
  onSubmit,
}: AchivmentsFormProps) {
  console.log(data);
  if (data) {
    onSubmit && onSubmit(data);
  }
  return <div>Achivments form</div>;
}
