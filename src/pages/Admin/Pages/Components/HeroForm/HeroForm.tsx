import { HeroFormProps } from './HeroForm.type';

export default function HeroForm({ data, onSubmit }: HeroFormProps) {
  console.log(data);
  if (data) {
    onSubmit && onSubmit(data);
  }
  return <div>Hero form</div>;
}
