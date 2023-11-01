import Button from '@mui/material/Button';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

import { StudentLessonProps } from './StudentRow.type';

export default function StudentRow({ data, onDelete }: StudentLessonProps) {
  const { _id, name, phone, email } = data;
  return (
    <TableRow key={_id}>
      <TableCell>{name}</TableCell>
      <TableCell>{phone}</TableCell>
      <TableCell>{email}</TableCell>
      <TableCell>
        <Button
          size="small"
          variant="contained"
          color="error"
          onClick={() => onDelete && onDelete(_id)}
        >
          Delete
        </Button>
      </TableCell>
    </TableRow>
  );
}
