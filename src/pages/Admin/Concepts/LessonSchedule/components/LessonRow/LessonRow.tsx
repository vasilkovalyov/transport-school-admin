import { useNavigate } from 'react-router-dom';

import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

import dayjs from 'dayjs';

import { LessonScheduleProps } from './LessonRow.type';
import { LinksConcepts } from '@/src/constants/routes';
import { shortNames } from '@/src/utils/dayNames';

export default function LessonRow({
  _id,
  heading,
  date_start_event,
  day_end,
  day_start,
  time_end,
  time_start,
  type_group,
  type_lesson,
  createdAt,
}: LessonScheduleProps) {
  const navigate = useNavigate();
  const editLink = `${LinksConcepts.LESSON_SCHEDULE_EDIT}/${_id}`;

  const isElapsedDate = () =>
    new Date(date_start_event).getTime() < new Date().getTime();

  return (
    <TableRow key={_id}>
      <TableCell>{heading}</TableCell>
      <TableCell>{type_group}</TableCell>
      <TableCell>{type_lesson}</TableCell>
      {}
      <TableCell>
        {shortNames[parseInt(day_start)].name} -{' '}
        {shortNames[parseInt(day_end)].name}
      </TableCell>
      <TableCell>
        {time_start} - {time_end}
      </TableCell>
      <TableCell>{dayjs(date_start_event).format('DD MMM YYYY')}</TableCell>
      <TableCell>{dayjs(createdAt).format('DD MMM YYYY | HH:MM')}</TableCell>
      <TableCell>
        <Chip
          label={isElapsedDate() ? 'Done' : 'Waiting'}
          color={isElapsedDate() ? 'error' : 'success'}
        />
      </TableCell>
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
