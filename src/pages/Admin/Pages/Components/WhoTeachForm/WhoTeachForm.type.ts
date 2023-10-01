export type WhoTeachFormProps = {
  data?: IWhoTeachFormData;
  onSubmit?: (data: IWhoTeachFormData) => void;
};

export interface IWhoTeachFormData {
  image?: string;
  heading: string;
  rich_text: string;
}
