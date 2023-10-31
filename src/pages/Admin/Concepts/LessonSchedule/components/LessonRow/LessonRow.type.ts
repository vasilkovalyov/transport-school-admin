export type LessonScheduleProps = {
  _id: string;
  heading: string;
  type_group: string;
  type_lesson: string;
  days?: number[];
  time_start: string;
  time_end: string;
  date_start_event: string;
  createdAt?: string;
};

export type LessonScheduleEditableProps = Omit<
  LessonScheduleProps,
  '_id' | 'createdAt'
>;

export type FormValuesKey = keyof LessonScheduleEditableProps;
