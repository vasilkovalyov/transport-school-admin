export type WhoTeachFormProps = {
  data?: IWhoTeachFormData;
  onSubmit?: (data: IWhoTeachFormData) => void;
};

export interface IWhoTeachFormData {
  heading: string;
}
