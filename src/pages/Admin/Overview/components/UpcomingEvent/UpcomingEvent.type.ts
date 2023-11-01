import { LessonScheduleProps } from '@/src/pages/Admin/Concepts/LessonSchedule/components';

export type UpcomingEventProps = Pick<
  LessonScheduleProps,
  | '_id'
  | 'date_start_event'
  | 'time_start'
  | 'time_end'
  | 'heading'
  | 'max_people'
  | 'students'
>;
