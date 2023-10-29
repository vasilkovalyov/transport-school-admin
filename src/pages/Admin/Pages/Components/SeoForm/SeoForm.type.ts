export type SeoFormProps = {
  data?: SeoFormDataType | null;
  onUpdate?: (data: SeoFormDataType) => void;
};

export type SeoFormDataType = {
  title: string;
  description?: string | null;
  keywords?: string | null;
};

export type SeoFullDataType = SeoFormDataType & {
  page: string;
};
