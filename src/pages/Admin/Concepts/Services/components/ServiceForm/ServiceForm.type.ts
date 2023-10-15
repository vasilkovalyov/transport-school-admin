export type ServiceFormProps = {
  data?: ServiceEditableFormData;
  onSubmit?: (data: ServiceEditableFormData) => void;
};

export interface IServiceFormData {
  _id: string;
  image?: string;
  heading: string;
  price: number | null;
  top_list_info: IServiceInfoItemData[];
  bottom_list_info: IServiceInfoItemData[];
}

export type ServiceEditableFormData = Omit<IServiceFormData, '_id'>;

export type FormValuesKey = keyof ServiceEditableFormData;

export interface IServiceInfoItemData {
  id?: string;
  text: string;
}
