export type AchivmentFormProps = {
  data?: IAchivmentFormData | null;
  onSubmit?: (data: IAchivmentFormData) => void;
};

export interface IAchivmentFormData {
  heading: string;
  subheading: string;
  list_achivments: IAchivmentListItemData[];
}

export interface IAchivmentListItemData {
  id?: string;
  heading: string;
  text: string;
}
