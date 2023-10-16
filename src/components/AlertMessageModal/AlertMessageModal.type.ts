export type AlertMessageDeleteProps = {
  open: boolean;
  title: string;
  text?: string;
  loading?: boolean;
  handleAgree: () => void;
  handleClose: () => void;
};
