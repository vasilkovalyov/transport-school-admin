import { LessonType } from './lesson';

export type StudentType = {
  _id: string;
  name: string;
  phone: string;
  email: string;
  lessons: number | LessonType[];
};
