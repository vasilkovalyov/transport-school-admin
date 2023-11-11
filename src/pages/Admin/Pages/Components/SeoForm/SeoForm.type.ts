import { SeoType } from '@/src/types/seo';

export type SeoFormProps = {
  data?: SeoType | null;
  onUpdate?: (data: SeoType) => void;
};

export type SeoFullDataType = SeoType & {
  page: string;
};
