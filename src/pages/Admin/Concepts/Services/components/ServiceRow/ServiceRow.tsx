import { useNavigate } from 'react-router-dom';

import Button from '@mui/material/Button';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

import { ServiceRowProps } from './ServiceRow.type';
import { Links } from '@/src/constants/routes';

export default function ServiceRow({
  _id,
  heading,
  image,
  price,
}: ServiceRowProps) {
  const navigate = useNavigate();
  const editLink = `${Links.ADMIN_SERVICES_EDIT}/${_id}`;

  return (
    <TableRow key={_id}>
      <TableCell>
        <img src={image} alt={heading} style={{ maxWidth: '100px' }} />
      </TableCell>
      <TableCell>{heading}</TableCell>
      <TableCell>{price}</TableCell>
      <TableCell>
        <Button
          color="success"
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
