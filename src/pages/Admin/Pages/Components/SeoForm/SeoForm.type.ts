export type SeoFormProps = {
  data?: ISeoFormData | null;
  onUpdate?: (data: ISeoFormData) => void;
};

export interface ISeoFormData {
  title: string;
  description?: string | null;
  keywords?: string | null;
}

export interface ISeoFullData extends ISeoFormData {
  page: string;
}
