import { BaseBlockFormProps, BaseBlockType, BlockInfoPageType } from '../types';

export type RequirementFormProps = BaseBlockFormProps<RequirementFormDataType>;

export type RequirementFormDataType = BaseBlockType & {
  heading: string;
  requirements_list?: RequirementItemType[];
};

export type RequirementItemType = {
  id?: string;
  image?: string;
  heading: string;
  text: string;
};

export type RequirementBlockFullDataType = RequirementFormDataType &
  BlockInfoPageType;
