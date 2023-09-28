export type AboutCourseFormProps = {
  data?: IAboutCourseFormData;
  onSubmit?: (data: IAboutCourseFormData) => void;
};

export interface IAboutCourseFormData {
  heading: string;
}
