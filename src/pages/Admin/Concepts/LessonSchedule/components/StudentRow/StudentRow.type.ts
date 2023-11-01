export type StudentLessonProps = {
  data: StudentLessonType;
  onDelete?: (id: string) => void;
};

export type StudentLessonType = {
  _id: string;
  name: string;
  phone: string;
  email: string;
};
