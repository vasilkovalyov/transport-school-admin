import { useNavigate } from 'react-router-dom';

import Button from '@mui/material/Button';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

import dayjs from 'dayjs';

import { LessonRowProps } from './LessonRow.type';
import { LinksConcepts } from '@/src/constants/routes';

export default function LessonRow({
  _id,
  heading,
  typeGroup,
  typeLesson,
  daysShedule,
  timeSchedule,
  dateStart,
}: LessonRowProps) {
  const navigate = useNavigate();
  const editLink = `${LinksConcepts.SERVICES_EDIT}/${_id}`;

  return (
    <TableRow key={_id}>
      <TableCell>{heading}</TableCell>
      <TableCell>{typeGroup}</TableCell>
      <TableCell>{typeLesson}</TableCell>
      <TableCell>
        {daysShedule[0]} - {daysShedule[1]}
      </TableCell>
      <TableCell>
        {timeSchedule[0]} - {timeSchedule[1]}
      </TableCell>
      <TableCell>{dayjs(dateStart).format('DD MMM YYYY')}</TableCell>
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
