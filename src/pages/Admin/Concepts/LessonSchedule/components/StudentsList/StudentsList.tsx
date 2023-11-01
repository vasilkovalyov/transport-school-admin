import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Box } from '@mui/material';
import Table from '@mui/material/Table';
import Typography from '@mui/material/Typography';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CircularProgress from '@mui/material/CircularProgress';

import { StudentRow, StudentLessonType } from '../StudentRow';
import api from '@/src/api/axios';
import { AlertMessageModal, useAlertMessageModal } from '@/src/components';
import ServiceLessonSchedule from '../../LessonSchedule.service';

const headCells: string[] = ['Name', 'Phone', 'Email'];

const service = new ServiceLessonSchedule();

export default function StudentsList() {
  let { id } = useParams();

  const [loadingRemove, setLoadingRemove] = useState<boolean>(false);
  const { selectedId, openModal, onCloseModal, onOpenModal } =
    useAlertMessageModal();

  const [students, setStudents] = useState<StudentLessonType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  async function loadData() {
    try {
      setLoading(true);
      const response = await api.get(`lesson-schedule-students/${id}`);
      setStudents(response.data);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }

  async function onDeleteStudent() {
    if (!id) return;
    if (!selectedId) return null;
    try {
      setLoadingRemove(true);
      await service.deleteStudent(id, selectedId);
      const updatedReviews = students.filter((item) => item._id !== selectedId);
      setStudents(updatedReviews);
    } catch (e) {
      console.log(e);
    } finally {
      setLoadingRemove(false);
      onCloseModal();
    }
  }

  useEffect(() => {
    loadData();
  }, []);

  return (
    <Box>
      {loading ? (
        <Box py={4} sx={{ display: 'flex', justifyContent: 'center' }}>
          <CircularProgress />
        </Box>
      ) : students.length ? (
        <Box>
          <TableContainer component={Paper} elevation={3}>
            <Table sx={{ minWidth: 850 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  {headCells.map((cell) => (
                    <TableCell key={cell}>{cell}</TableCell>
                  ))}
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {students.map((post) => (
                  <StudentRow
                    key={post._id}
                    data={post}
                    onDelete={onOpenModal}
                  />
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <AlertMessageModal
            open={openModal}
            loading={loadingRemove}
            title="Do you want to remove user?"
            handleAgree={onDeleteStudent}
            handleClose={onCloseModal}
          />
        </Box>
      ) : (
        <Typography variant="h4">No students</Typography>
      )}
    </Box>
  );
}
