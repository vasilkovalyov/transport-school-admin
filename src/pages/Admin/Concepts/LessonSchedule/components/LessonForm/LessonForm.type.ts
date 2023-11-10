import { LessonEditProps, LessonType } from '@/src/types/lesson';

export type LessonFormProps = {
  data?: LessonEditProps;
  onSubmit?: (data: LessonEditProps) => void;
};

export type FormValuesKey = keyof Omit<
  LessonType,
  '_id' | 'createdAt' | 'students'
>;
