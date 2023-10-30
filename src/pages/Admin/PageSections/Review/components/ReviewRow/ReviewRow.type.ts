export type ReviewRowProps = {
  data: ReviewType;
  onDelete: (id: string) => void;
};

export type ReviewType = {
  _id: string;
  name: string;
  text: string;
  rating?: number | null;
  image?: string;
};
