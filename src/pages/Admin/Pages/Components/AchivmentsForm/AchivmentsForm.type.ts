import {
  BaseBlockCutDownFormProps,
  IBaseBlock,
  IBlockInfoPage,
} from '../types';

export type AchivmentsFormProps =
  BaseBlockCutDownFormProps<IAchivmentsSectionFormData>;

export interface IAchivmentsSectionFormData extends IBaseBlock {}

export interface IAchivmentsFormBlockFullData
  extends IAchivmentsSectionFormData,
    IBlockInfoPage {}
