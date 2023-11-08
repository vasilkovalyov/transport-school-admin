import { useNavigate } from 'react-router-dom';

import { Box } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

import { StudentsTableProps } from './StudentsTable.type';

const headCells: string[] = ['Name', 'Phone', 'Email'];

export default function StudentsTable({
  students,
  withLinkToSignlePage,
  linkToSinglePage,
  onClickDelete,
}: StudentsTableProps) {
  const navigate = useNavigate();

  return (
    <Box>
      <TableContainer component={Paper} elevation={3}>
        <Table sx={{ minWidth: 850 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              {headCells.map((cell) => (
                <TableCell key={cell}>{cell}</TableCell>
              ))}
              {withLinkToSignlePage && <TableCell></TableCell>}
              {onClickDelete && <TableCell></TableCell>}
            </TableRow>
          </TableHead>

          <TableBody>
            {students.map(({ _id, email, name, phone }) => (
              <TableRow key={_id}>
                <TableCell>{name}</TableCell>
                <TableCell>{phone}</TableCell>
                <TableCell>{email}</TableCell>
                {withLinkToSignlePage && (
                  <TableCell>
                    <Button
                      size="small"
                      variant="contained"
                      color="info"
                      onClick={() => {
                        linkToSinglePage &&
                          navigate(`${linkToSinglePage}/${_id}`);
                      }}
                    >
                      View
                    </Button>
                  </TableCell>
                )}
                {onClickDelete ? (
                  <TableCell>
                    <Button
                      size="small"
                      variant="contained"
                      color="error"
                      onClick={() => onClickDelete(_id)}
                    >
                      Delete
                    </Button>
                  </TableCell>
                ) : null}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
