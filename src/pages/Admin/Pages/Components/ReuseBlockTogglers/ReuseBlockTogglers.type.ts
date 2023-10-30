import { BaseBlockFormLoadingType } from '../types';

export type ReuseBlockTogglersProps = {
  publish?: boolean;
  loadingType?: BaseBlockFormLoadingType | null;
  showPublishButton?: boolean | null;
  onSubmit: () => void;
  onPublish?: (value: boolean) => void;
};
