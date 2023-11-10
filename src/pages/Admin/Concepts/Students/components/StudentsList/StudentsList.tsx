import { useEffect, useState } from 'react';

import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';

import {
  AlertMessageModal,
  StudentsTable,
  useAlertMessageModal,
} from '@/src/components';
import { StudentType } from '@/src/types/student';
import StudentsService from '../../Students.service';
import { Concepts } from '@/src/constants/routes/concepts';

const service = new StudentsService();

export default function StudentsList() {
  const [loadingRemove, setLoadingRemove] = useState<boolean>(false);
  const { selectedId, openModal, onCloseModal, onOpenModal } =
    useAlertMessageModal();

  const [students, setStudents] = useState<StudentType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  async function loadData() {
    try {
      setLoading(true);
      const response = await service.getStudents();
      setStudents(response.data);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }

  async function onDeleteStudent() {
    if (!selectedId) return null;
    try {
      setLoadingRemove(true);
      await service.delete(selectedId);
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
          <StudentsTable
            students={students}
            onClickDelete={onOpenModal}
            linkToSinglePage={Concepts.STUDENTS}
            withLinkToSignlePage={true}
          />
          <AlertMessageModal
            open={openModal}
            loading={loadingRemove}
            title="Do you want to remove student?"
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
