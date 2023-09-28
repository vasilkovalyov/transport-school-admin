import { ServicesFormProps } from './ServicesForm.type';

export default function ServicesForm({ data, onSubmit }: ServicesFormProps) {
  console.log(data);
  if (data) {
    onSubmit && onSubmit(data);
  }
  return <div>Services form</div>;
}
