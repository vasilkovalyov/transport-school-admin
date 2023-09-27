export type ServiceFormProps = {
  data?: IServiceFormData;
  onSubmit?: (data: IServiceFormData) => void;
};

export interface IServiceFormData {
  heading: string;
  price: number | null;
  top_list_info: IServiceInfoItemData[];
  bottom_list_info: IServiceInfoItemData[];
}

export interface IServiceInfoItemData {
  text: string;
}
