import { ScheduleFormProps } from './ScheduleForm.type';

export default function ScheduleForm({ data, onSubmit }: ScheduleFormProps) {
  console.log(data);
  if (data) {
    onSubmit && onSubmit(data);
  }
  return <div>Schedule form</div>;
}
