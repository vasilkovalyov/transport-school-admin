export type ServicesFormProps = {
  data?: IServicesFormData;
  onSubmit?: (data: IServicesFormData) => void;
};

export interface IServicesFormData {
  heading: string;
}
