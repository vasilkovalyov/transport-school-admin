import { ContactsFormProps } from './ContactsForm.type';

export default function ContactsForm({ data, onSubmit }: ContactsFormProps) {
  console.log(data);
  if (data) {
    onSubmit && onSubmit(data);
  }
  return <div>Contacts form</div>;
}
