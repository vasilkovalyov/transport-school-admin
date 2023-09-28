export type ContactsFormProps = {
  data?: IContactsFormData;
  onSubmit?: (data: IContactsFormData) => void;
};

export interface IContactsFormData {
  isShow: boolean;
}
