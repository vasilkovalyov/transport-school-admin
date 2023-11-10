import Pagination from '@mui/material/Pagination';
import { Box } from '@mui/material';
import Table from '@mui/material/Table';
import Typography from '@mui/material/Typography';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import LinearProgress from '@mui/material/LinearProgress';

import { LessonTableRow } from '../LessonTableRow';
import { LessonType } from '@/src/types/lesson';
import { usePostPaginate } from '@/src/hooks/usePostPaginate';

const headCells: string[] = [
  'Heading',
  'Group',
  'Lesson',
  'Days',
  'Time',
  'Date Start',
];

export default function LessonTableForStudents({ id }: { id: string }) {
  const { loading, page, posts, totalPageCount, handleChangePage } =
    usePostPaginate<LessonType>({
      apiUrl: `lesson-schedules-student/${id}`,
      postSizePage: 10,
    });

  return (
    <>
      <TableContainer component={Paper} elevation={3}>
        <Table sx={{ minWidth: 850 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              {headCells.map((cell) => (
                <TableCell key={cell}>{cell}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {loading ? (
              <TableRow>
                <TableCell colSpan={headCells.length}>
                  <LinearProgress />
                </TableCell>
              </TableRow>
            ) : posts.length ? (
              <>
                {posts.map((post) => (
                  <LessonTableRow
                    key={post._id}
                    params={post}
                    isExpand={false}
                  />
                ))}
              </>
            ) : (
              <Typography variant="h4">No lessons</Typography>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      {totalPageCount && totalPageCount > 1 && (
        <Box py={4} display="flex" justifyContent="center">
          <Pagination
            count={totalPageCount}
            page={page}
            shape="rounded"
            onChange={handleChangePage}
          />
        </Box>
      )}
    </>
  );
}
