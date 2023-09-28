import { RequirementFormProps } from './RequirementForm.type';

export default function RequirementForm({
  data,
  onSubmit,
}: RequirementFormProps) {
  console.log(data);
  if (data) {
    onSubmit && onSubmit(data);
  }
  return <div>Requirement form</div>;
}
