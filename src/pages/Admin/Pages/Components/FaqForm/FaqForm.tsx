import { FaqFormProps } from './FaqForm.type';

export default function FaqForm({ data, onSubmit }: FaqFormProps) {
  console.log(data);
  if (data) {
    onSubmit && onSubmit(data);
  }
  return <div>Faq form</div>;
}
