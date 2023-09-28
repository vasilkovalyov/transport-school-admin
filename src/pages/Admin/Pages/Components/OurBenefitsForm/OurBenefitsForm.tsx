import { OurBenefitsFormProps } from './OurBenefitsForm.type';

export default function OurBenefitsForm({
  data,
  onSubmit,
}: OurBenefitsFormProps) {
  console.log(data);
  if (data) {
    onSubmit && onSubmit(data);
  }
  return <div>Our benefits form</div>;
}
