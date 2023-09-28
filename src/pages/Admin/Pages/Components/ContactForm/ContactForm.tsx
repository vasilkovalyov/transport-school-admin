import { ContactFormProps } from './ContactForm.type';

export default function ContactForm({ data, onSubmit }: ContactFormProps) {
  console.log(data);
  if (data) {
    onSubmit && onSubmit(data);
  }
  return <div>Contact form</div>;
}
