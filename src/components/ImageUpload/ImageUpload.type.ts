export type ImageUploadProps = {
  image?: string | null;
  onChange: (fileBlob: string, file?: File | null) => void;
  viewType: ImageUploadViewType;
  width?: number;
  height?: number;
};

export type ImageUploadViewType = 'square' | 'wide' | 'avatar';
