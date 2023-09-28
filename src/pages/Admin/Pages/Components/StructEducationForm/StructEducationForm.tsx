import { StructEducationFormProps } from './StructEducationForm.type';

export default function StructEducationForm({
  data,
  onSubmit,
}: StructEducationFormProps) {
  console.log(data);
  if (data) {
    onSubmit && onSubmit(data);
  }
  return <div>Struct education form</div>;
}
