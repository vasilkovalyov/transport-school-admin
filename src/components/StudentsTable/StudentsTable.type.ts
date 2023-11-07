import { StudentType } from '@/src/types/student';

export type StudentsTableProps = {
  students: StudentType[];
  withLinkToSignlePage?: boolean;
  linkToSinglePage?: string;
  onClickDelete?: (id: string) => void;
};
