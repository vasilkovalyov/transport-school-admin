import { BlockCardCreateProps } from '../BlogCard';

export type BlogFormProps = {
  data?: BlockCardCreateProps;
  onSubmit?: (data: BlockCardCreateProps) => void;
};
