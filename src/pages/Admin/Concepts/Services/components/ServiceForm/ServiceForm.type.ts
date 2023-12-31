export type ServiceFormProps = {
  data?: ServiceEditableFormData;
  loading?: boolean;
  onSubmit?: (data: ServiceEditableFormData) => void;
};

export type ServiceFormDataType = {
  _id?: string;
  image?: string;
  heading: string;
  price: number;
  top_list_info?: ServiceInfoItemDataType[];
  bottom_list_info?: ServiceInfoItemDataType[];
};

export type ServiceEditableFormData = Omit<ServiceFormDataType, '_id'>;

export type FormValuesKey = keyof ServiceEditableFormData;

export type ServiceInfoItemDataType = {
  id?: string;
  text: string;
};
