import { TeamEducationFormProps } from './TeamEducationForm.type';

export default function TeamEducationForm({
  data,
  onSubmit,
}: TeamEducationFormProps) {
  console.log(data);
  if (data) {
    onSubmit && onSubmit(data);
  }
  return <div>Team education form</div>;
}
