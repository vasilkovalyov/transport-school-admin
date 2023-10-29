import { BaseBlockFormProps, BaseBlockType, BlockInfoPageType } from '../types';

export type StructEducationFormProps =
  BaseBlockFormProps<StructEducationFormDataType>;

export type StructEducationFormDataType = BaseBlockType & {
  heading: string;
  struct_education_list?: StructEducationDataType[];
};

export type StructEducationDataType = {
  _id?: string;
  heading: string;
  rich_text: string;
};

export type StructEducationRichTextType = Omit<
  StructEducationDataType,
  'heading'
>;

export type StructEducationBlockFullDataType = StructEducationFormDataType &
  BlockInfoPageType;
