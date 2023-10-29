import { AxiosPromise } from 'axios';
import { BlocsEnum } from '../blocks-enum';

export type BaseBlockFormLoadingType = 'loading' | 'update' | 'publish';

export type BaseBlockFormProps<T> = {
  data?: T | null;
  loadingType?: BaseBlockFormLoadingType | null;
  onUpdate?: (data: T) => void;
  onCreate?: (data: T) => void;
  onPublish?: (value: boolean) => void;
};

export type BaseBlockCutDownFormProps<T> = {
  data?: T | null;
  loadingType?: BaseBlockFormLoadingType | null;
  onCreate?: () => void;
  onPublish?: (value: boolean) => void;
};

export type BaseBlockType = {
  publish?: boolean;
};

export type BlockInfoPageType = {
  block_order: number;
  block_name: BlocsEnum;
  block_page: string;
};

export interface IBlockService<T> {
  publish: (page: string) => AxiosPromise<boolean>;
  unpublish: (page: string) => AxiosPromise<boolean>;
  getBlock: (page: string) => AxiosPromise<T>;
  create?: (params: T) => AxiosPromise<{ message: string }>;
  update?: (params: T) => AxiosPromise<{ message: string }>;
}

export interface IBlockShortService<T> {
  publish: (page: string) => AxiosPromise<boolean>;
  unpublish: (page: string) => AxiosPromise<boolean>;
  getBlock: (page: string) => AxiosPromise<T>;
  create?: (params: T) => AxiosPromise<{ message: string }>;
  update?: (params: T) => AxiosPromise<{ message: string }>;
}
