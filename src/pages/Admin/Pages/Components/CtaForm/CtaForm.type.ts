export type CtaFormProps = {
  data?: ICtaFormData;
  onSubmit?: (data: ICtaFormData) => void;
};

export interface ICtaFormData {
  publish: boolean;
}
