import { BlockCardEditableProps } from '../BlogCard';

export type BlogFormProps = {
  data?: BlockCardEditableProps;
  loading?: boolean;
  onSubmit?: (data: BlockCardEditableProps) => void;
};
