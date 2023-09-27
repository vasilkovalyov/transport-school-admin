export type ContactsFormProps = {
  data?: IContactsFormData | null;
  onSubmit?: (data: IContactsFormData) => void;
};

export interface IContactsFormData {
  heading: string;
  address: string;
  phone: string;
  email: string;
  map_url: string;
}

export type FormValuesKey = keyof IContactsFormData;
