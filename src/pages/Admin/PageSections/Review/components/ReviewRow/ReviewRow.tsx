import { useNavigate } from 'react-router-dom';

import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

import { ReviewRowProps } from './ReviewRow.type';
import { LinksPageSections } from '@/src/constants/routes';

export default function ReviewRow({ data, onDelete }: ReviewRowProps) {
  const { _id, name, rating, text, image } = data;
  const navigate = useNavigate();
  const editLink = `${LinksPageSections.REVIEW_EDIT}/${_id}`;

  return (
    <TableRow key={_id}>
      <TableCell>
        {image ? (
          <img src={image} alt={name} style={{ maxWidth: '50px' }} />
        ) : null}
      </TableCell>
      <TableCell>{name}</TableCell>
      <TableCell>
        <Box maxWidth="400px">{text.split(' ').splice(0, 14).join(' ')}...</Box>
      </TableCell>
      <TableCell>{rating}</TableCell>
      <TableCell>
        <Button
          size="small"
          variant="contained"
          onClick={() => navigate(editLink)}
        >
          Edit
        </Button>
      </TableCell>
      <TableCell>
        <Button
          size="small"
          variant="contained"
          color="error"
          onClick={() => onDelete(_id)}
        >
          Delete
        </Button>
      </TableCell>
    </TableRow>
  );
}
