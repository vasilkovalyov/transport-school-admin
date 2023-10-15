import { Box, Pagination } from '@mui/material';
import Table from '@mui/material/Table';
import Typography from '@mui/material/Typography';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { LessonRow, LessonScheduleProps } from '../LessonRow';
import { usePostPaginate } from '@/src/hooks/usePostPaginate';

const headCells: string[] = [
  'Heading',
  'Type Group',
  'Type Lesson',
  'Days Shedule',
  'Time Schedule',
  'Date Start',
  'Date Create',
  'Status',
];

export default function LessonsList() {
  const { posts, totalPageCount, handleChangePage } =
    usePostPaginate<LessonScheduleProps>({
      apiUrl: 'lesson-schedules',
      postSizePage: 4,
    });

  return (
    <Box>
      {posts && posts.length ? (
        <Box>
          <TableContainer component={Paper} elevation={3}>
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
                {posts.map((post) => (
                  <LessonRow key={post._id} {...post} />
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          {totalPageCount && totalPageCount > 1 ? (
            <Box py={4} display="flex" justifyContent="center">
              <Pagination
                count={totalPageCount}
                shape="rounded"
                onChange={handleChangePage}
              />
            </Box>
          ) : null}
        </Box>
      ) : (
        <Typography variant="h4">No lessons</Typography>
      )}
    </Box>
  );
}
