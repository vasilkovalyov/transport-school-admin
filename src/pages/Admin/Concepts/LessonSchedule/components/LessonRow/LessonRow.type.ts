export type LessonRowProps = {
  _id: string;
  heading: string;
  typeGroup: string;
  typeLesson: LessonType;
  daysShedule: [string, string];
  timeSchedule: [string, string];
  dateStart: string;
};

export type LessonType = 'offline' | 'online';
