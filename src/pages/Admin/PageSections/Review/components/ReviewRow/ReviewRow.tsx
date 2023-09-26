import { useNavigate } from 'react-router-dom';

import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

import { ReviewRowProps } from './ReviewRow.type';
import { Links } from '@/src/constants/routes';

export default function ReviewRow({
  _id,
  image,
  text,
  name,
  rating,
}: ReviewRowProps) {
  const navigate = useNavigate();
  const editLink = `${Links.ADMIN_PAGE_SECTION_REVIEW_EDIT}/${_id}`;

  return (
    <TableRow key={_id}>
      <TableCell>
        <img src={image} alt={name} style={{ maxWidth: '100px' }} />
      </TableCell>
      <TableCell>{name}</TableCell>
      <TableCell>
        <Box maxWidth="400px">{text}</Box>
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
    </TableRow>
  );
}
