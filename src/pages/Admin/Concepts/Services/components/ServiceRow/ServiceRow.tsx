import { useNavigate } from 'react-router-dom';

import Button from '@mui/material/Button';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

import { ServiceRowProps } from './ServiceRow.type';
import { LinksConcepts } from '@/src/constants/routes';

export default function ServiceRow({
  _id,
  heading,
  price,
  image,
}: ServiceRowProps) {
  const navigate = useNavigate();
  const editLink = `${LinksConcepts.SERVICES_EDIT}/${_id}`;

  return (
    <TableRow key={_id}>
      <TableCell>
        {image ? (
          <img src={image} alt={heading} style={{ maxWidth: '100px' }} />
        ) : null}
      </TableCell>
      <TableCell>{heading}</TableCell>
      <TableCell>{price}</TableCell>
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
