import { StudentType } from '@/src/types/student';

export type StudentInfoType = Omit<StudentType, '_id'>;
