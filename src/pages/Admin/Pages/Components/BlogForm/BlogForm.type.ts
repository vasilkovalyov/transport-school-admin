import { BaseBlockFormProps, BaseBlockType, BlockInfoPageType } from '../types';

export type BlogFormProps = BaseBlockFormProps<BlogFormDataType>;

export type BlogFormDataType = BaseBlockType & {
  heading: string;
  post_number?: number | null;
};

export type BlogBlockFullDataType = BlogFormDataType & BlockInfoPageType;
