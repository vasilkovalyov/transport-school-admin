export type CourseForPeopleFormProps = {
  data?: ICourseForPeopleFormData;
  onSubmit?: (data: ICourseForPeopleFormData) => void;
};

export interface ICourseForPeopleFormData {
  isShow: boolean;
}
