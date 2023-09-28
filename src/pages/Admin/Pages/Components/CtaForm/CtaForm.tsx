import { CtaFormProps } from './CtaForm.type';

export default function CtaForm({ data, onSubmit }: CtaFormProps) {
  console.log(data);
  if (data) {
    onSubmit && onSubmit(data);
  }
  return <div>Cta form</div>;
}
