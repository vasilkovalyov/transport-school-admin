import { AxiosPromise } from 'axios';
import { BlocsEnum } from '../Pages/blocks-enum';

export type BaseBlockReusableFormProps<T> = {
  data?: T | null;
  onUpdate?: (data: T) => void;
  onCreate?: (data: T) => void;
};

export type BlockReusableInfoType = {
  block_name: BlocsEnum;
};

export interface IBlockReusableService<T> {
  getBlock: () => AxiosPromise<T>;
  create: (params: T) => AxiosPromise<{ message: string }>;
  update: (params: T) => AxiosPromise<{ message: string }>;
}

export enum SectionEnum {
  SectionAchivment = 'ReuseBlockAchivments',
  SectionContacts = 'ReuseBlockContacts',
  SectionCta = 'ReuseBlockCta',
  SectionFaq = 'ReuseBlockFaq',
  SectionReview = 'ReuseBlockReview',
}
