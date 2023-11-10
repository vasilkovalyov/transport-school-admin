import { StudentType } from './student';

export type LessonType = {
  _id: string;
  heading: string;
  type_group: string;
  type_lesson: string;
  days?: number[];
  time_start: string;
  time_end: string;
  date_start_event: string;
  createdAt?: string;
  max_people: number;
  students?: number | StudentType[];
};

export type LessonEditProps = Pick<
  LessonType,
  | 'heading'
  | 'type_group'
  | 'type_lesson'
  | 'days'
  | 'time_start'
  | 'time_end'
  | 'date_start_event'
  | 'max_people'
>;
