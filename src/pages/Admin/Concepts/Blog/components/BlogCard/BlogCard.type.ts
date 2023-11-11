export type BlogCardProps = {
  _id: string;
  image?: string;
  heading: string;
  slug: string;
  short_description?: string;
  rich_text?: string;
  createdAt?: string;
  seo_description?: string;
  seo_keywords?: string;
};

export type BlockCardEditableProps = Omit<BlogCardProps, '_id' | 'createdAt'>;
