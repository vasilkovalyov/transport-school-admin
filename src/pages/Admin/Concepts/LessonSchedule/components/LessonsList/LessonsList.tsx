import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { LessonRow, LessonRowProps } from '../LessonRow';

const lessons: LessonRowProps[] = [
  {
    _id: '1',
    heading: 'Plus',
    typeGroup: 'Вечерняя группа',
    typeLesson: 'offline',
    daysShedule: ['Пн', 'Пт'],
    timeSchedule: ['7:00', '8:00'],
    dateStart: '2024-04-23',
  },
  {
    _id: '2',
    heading: 'STANDART',
    typeGroup: 'Вечерняя группа',
    typeLesson: 'offline',
    daysShedule: ['Пн', 'Пт'],
    timeSchedule: ['7:00', '8:00'],
    dateStart: '2024-05-23',
  },
  {
    _id: '3',
    heading: 'PRACTIC',
    typeGroup: 'Вечерняя группа',
    typeLesson: 'offline',
    daysShedule: ['Пн', 'Пт'],
    timeSchedule: ['7:00', '8:00'],
    dateStart: '2024-11-23',
  },
];

const headCells: string[] = [
  'Heading',
  'Type Group',
  'Type Lesson',
  'Days Shedule',
  'Time Schedule',
  'Date Start',
];

export default function BlogList() {
  return (
    <Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              {headCells.map((cell) => (
                <TableCell key={cell}>{cell}</TableCell>
              ))}
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {lessons.map((rowLesson) => (
              <LessonRow key={rowLesson._id} {...rowLesson} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
