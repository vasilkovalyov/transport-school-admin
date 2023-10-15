import { BlockCardEditableProps } from '../BlogCard';

export type BlogFormProps = {
  data?: BlockCardEditableProps;
  onSubmit?: (data: BlockCardEditableProps) => void;
};
