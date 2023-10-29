import {
  BaseBlockCutDownFormProps,
  BaseBlockType,
  BlockInfoPageType,
} from '../types';

export type AchivmentsFormProps =
  BaseBlockCutDownFormProps<AchivmentsSectionFormDataType>;

export type AchivmentsSectionFormDataType = BaseBlockType;

export type AchivmentsFormBlockFullDataType = AchivmentsSectionFormDataType &
  BlockInfoPageType;
