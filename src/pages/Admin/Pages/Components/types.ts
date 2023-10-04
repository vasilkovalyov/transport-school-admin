export type BaseBlockFormProps<T> = {
  data: T;
  onSubmit?: (data: T) => void;
  onPublish?: (value: boolean) => void;
};

export interface IBaseBlock {
  publish: boolean;
}
