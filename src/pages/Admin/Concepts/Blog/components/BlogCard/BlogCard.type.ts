export type BlogCardProps = {
  _id: string;
  image?: string;
  heading: string;
  slug: string;
  short_description?: string;
  rich_text: string;
  date: string;
};

export type BlockCardCreateProps = Omit<BlogCardProps, '_id'>;
