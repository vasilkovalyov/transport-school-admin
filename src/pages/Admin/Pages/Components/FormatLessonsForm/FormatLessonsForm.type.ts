export type FormatLessonsFormProps = {
  data?: IFormatLessonsFormData;
  onSubmit?: (data: IFormatLessonsFormData) => void;
};

export interface IFormatLessonsFormData {
  heading: string;
}
