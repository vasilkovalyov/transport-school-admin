export type OurBenefitsFormProps = {
  data?: IOurBenefitsFormData;
  onSubmit?: (data: IOurBenefitsFormData) => void;
};

export interface IOurBenefitsFormData {
  heading: string;
}
