import { BaseBlockFormLoadingType } from '../types';

export type BlockTogglersProps = {
  typeToggle: 'create' | 'update';
  publish?: boolean;
  loadingType?: BaseBlockFormLoadingType | null;
  showPublishButton?: boolean;
  onSubmit: () => void;
  onPublish?: (value: boolean) => void;
};
