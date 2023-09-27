import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';

import { DynamicFieldTogglersProps } from './DynamicFieldTogglers.type';

export default function DynamicFieldTogglers({
  fieldIndex,
  fieldLength,
  fieldAppend,
  fieldRemove,
}: DynamicFieldTogglersProps) {
  return (
    <Stack spacing={2} direction="row">
      {fieldLength - 1 <= fieldIndex ? (
        <Button variant="contained" size="medium" onClick={fieldAppend}>
          <AddCircleOutlineOutlinedIcon />
        </Button>
      ) : (
        <Button
          variant="contained"
          size="medium"
          onClick={() => fieldRemove(fieldIndex)}
        >
          <RemoveCircleOutlineOutlinedIcon />
        </Button>
      )}
    </Stack>
  );
}
