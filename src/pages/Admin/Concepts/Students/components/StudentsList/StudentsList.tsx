import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';

import api from '@/src/api/axios';
import {
  AlertMessageModal,
  StudentsTable,
  useAlertMessageModal,
} from '@/src/components';
import { StudentType } from '@/src/types/student';

export default function StudentsList() {
  let { id } = useParams();

  const [loadingRemove, setLoadingRemove] = useState<boolean>(false);
  const { selectedId, openModal, onCloseModal, onOpenModal } =
    useAlertMessageModal();

  const [students, setStudents] = useState<StudentType[]>([]);
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
      // await service.deleteStudent(id, selectedId);
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
          <StudentsTable students={students} onClickDelete={onOpenModal} />
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
