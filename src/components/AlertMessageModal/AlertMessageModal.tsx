import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Stack from '@mui/material/Stack';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import CircularProgress from '@mui/material/CircularProgress';

import { AlertMessageDeleteProps } from './AlertMessageModal.type';

export default function AlertMessageModal({
  open,
  title,
  text,
  loading,
  handleAgree,
  handleClose,
}: AlertMessageDeleteProps) {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        {text ? <DialogContentText>{text}</DialogContentText> : null}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Disagree</Button>
        <Stack spacing={2} direction="row" alignItems="center">
          <Button onClick={handleAgree} autoFocus disabled={loading}>
            Agree
          </Button>
          {loading ? <CircularProgress size={20} /> : null}
        </Stack>
      </DialogActions>
    </Dialog>
  );
}
