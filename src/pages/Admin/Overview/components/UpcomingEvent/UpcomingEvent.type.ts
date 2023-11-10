import { LessonType } from '@/src/types/lesson';

export type UpcomingEventProps = Pick<
  LessonType,
  | '_id'
  | 'date_start_event'
  | 'time_start'
  | 'time_end'
  | 'heading'
  | 'max_people'
  | 'students'
>;
