import { BaseBlockFormLoadingType } from '../types';

export type ReuseBlockTogglersProps = {
  publish?: boolean;
  loadingType?: BaseBlockFormLoadingType | null;
  showPublishButton?: boolean;
  onSubmit: () => void;
  onPublish?: (value: boolean) => void;
};
