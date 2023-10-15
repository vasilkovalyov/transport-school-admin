import { LessonScheduleEditableProps } from '../LessonRow';

export type LessonFormProps = {
  data?: LessonScheduleEditableProps;
  onSubmit?: (data: LessonScheduleEditableProps) => void;
};
