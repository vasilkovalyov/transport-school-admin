import { useNavigate } from 'react-router-dom';

import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

import dayjs from 'dayjs';

import { LessonTableRowProps } from './LessonTableRow.type';
import { Concepts } from '@/src/constants/routes/concepts';
import { shortNames } from '@/src/utils/dayNames';

export default function LessonFormRow({
  params,
  isExpand = true,
}: LessonTableRowProps) {
  const navigate = useNavigate();

  const {
    _id,
    heading,
    date_start_event,
    days,
    time_end,
    time_start,
    type_group,
    type_lesson,
    max_people,
    students = 0,
  } = params;

  const editLink = `${Concepts.LESSON_SCHEDULE_EDIT}/${_id}`;
  const studentsLink = `${Concepts.LESSON_SCHEDULE_STUDENTS}/${_id}`;

  const isElapsedDate = () =>
    new Date(date_start_event).getTime() < new Date().getTime();

  const getDays = (days: number[]) => {
    if (days.length === 2) {
      return `${shortNames[days[0]].name} - ${shortNames[days[1]].name}`;
    }
    let daysStr = '';
    days.forEach((day) => {
      daysStr += shortNames[day].name + ', ';
    });
    return daysStr;
  };

  return (
    <TableRow key={_id}>
      <TableCell>{heading}</TableCell>
      <TableCell>{type_group}</TableCell>
      <TableCell>{type_lesson}</TableCell>
      <TableCell>{days ? getDays(days) : null}</TableCell>
      <TableCell>
        {time_start} - {time_end}
      </TableCell>
      <TableCell>{dayjs(date_start_event).format('DD MMM YYYY')}</TableCell>
      {isExpand ? (
        <>
          <TableCell>{students as number}</TableCell>
          <TableCell>{max_people}</TableCell>
        </>
      ) : null}
      <TableCell>
        <Chip
          label={isElapsedDate() ? 'Done' : 'Waiting'}
          color={isElapsedDate() ? 'error' : 'success'}
        />
      </TableCell>
      {isExpand ? (
        <>
          <TableCell>
            {students ? (
              <Button
                size="small"
                variant="contained"
                onClick={() => navigate(studentsLink)}
              >
                Studens
              </Button>
            ) : null}
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
        </>
      ) : null}
    </TableRow>
  );
}
