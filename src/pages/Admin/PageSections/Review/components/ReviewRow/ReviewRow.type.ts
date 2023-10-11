export type ReviewRowProps = {
  data: IReview;
  onDelete: (id: string) => void;
};

export interface IReview {
  _id: string;
  name: string;
  text?: string;
  rating: number | null;
}
