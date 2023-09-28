export type FaqFormProps = {
  data?: IFaqFormData;
  onSubmit?: (data: IFaqFormData) => void;
};

export interface IFaqFormData {
  isShow: boolean;
}
