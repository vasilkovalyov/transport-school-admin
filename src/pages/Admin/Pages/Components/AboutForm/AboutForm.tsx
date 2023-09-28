import { AboutFormProps } from './AboutForm.type';

export default function AboutForm({ data, onSubmit }: AboutFormProps) {
  console.log(data);
  if (data) {
    onSubmit && onSubmit(data);
  }
  return <div>About form</div>;
}
