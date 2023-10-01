export type CourseForPeopleFormProps = {
  data?: ICourseForPeopleFormData;
  onSubmit?: (data: ICourseForPeopleFormData) => void;
};

export interface ICourseForPeopleFormData {
  heading: string;
  rich_text: string;
}
