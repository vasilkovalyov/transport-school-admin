export type OurBenefitsFormProps = {
  data?: IOurBenefitsFormData;
  onSubmit?: (data: IOurBenefitsFormData) => void;
};

export interface IOurBenefitsFormData {
  image?: string;
  heading: string;
  rich_text: string;
}
