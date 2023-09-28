import { AboutUsFormProps } from './AboutUsForm.type';

export default function AboutUsForm({ data, onSubmit }: AboutUsFormProps) {
  console.log(data);
  if (data) {
    onSubmit && onSubmit(data);
  }
  return <div>About us form</div>;
}
