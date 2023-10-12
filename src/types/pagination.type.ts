export type PaginationPostsType<T> = {
  next_page?: number | null;
  posts: T[];
  total_count: number;
  total_pages?: number | null;
};
