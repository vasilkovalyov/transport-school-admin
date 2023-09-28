import { WhoTeachFormProps } from './WhoTeachForm.type';

export default function WhoTeachForm({ data, onSubmit }: WhoTeachFormProps) {
  console.log(data);
  if (data) {
    onSubmit && onSubmit(data);
  }
  return <div>WhoTeach Form</div>;
}
