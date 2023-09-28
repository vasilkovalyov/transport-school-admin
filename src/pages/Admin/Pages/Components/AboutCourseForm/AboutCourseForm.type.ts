export type AboutCourseFormProps = {
  data?: IAboutCourseFormData;
  onSubmit?: (data: IAboutCourseFormData) => void;
};

export interface IAboutCourseFormData {
  image?: string;
  heading: string;
  rich_text: string;
}
