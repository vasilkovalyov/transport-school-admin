export type LessonFormProps = {
  data?: ILessonFormData;
  onSubmit?: (data: ILessonFormData) => void;
};

export interface ILessonFormData {
  heading: string;
  type_group: string | null;
  type_lesson: string | null;
  date_end: string;
  day_start: number | null;
  day_end: number | null;
  time_start: string;
  time_end: string;
}

export type FormValuesKey = keyof ILessonFormData;
