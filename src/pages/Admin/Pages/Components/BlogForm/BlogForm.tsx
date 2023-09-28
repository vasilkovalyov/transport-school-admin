import { BlogFormProps } from './BlogForm.type';

export default function BlogForm({ data, onSubmit }: BlogFormProps) {
  console.log(data);
  if (data) {
    onSubmit && onSubmit(data);
  }
  return <div>Section blog form</div>;
}
