import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import { Box } from '@mui/material';
import Container from '@mui/material/Container';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';

import { Concepts } from '@/src/constants/routes/concepts';
import { Dashboard } from '@/src/constants/routes/dashboard';
import { StudentInfo, StudentInfoType } from '../components/StudentInfo';

import StudentService from '../Students.service';
const service = new StudentService();

export default function Student() {
  let { id } = useParams();
  const [loading, setLoading] = useState<boolean>(false);
  const [studentInfo, setStudentInfo] = useState<StudentInfoType | null>(null);

  async function loadStudentInfo() {
    if (!id) return;
    try {
      setLoading(true);
      const response = await service.getStudent(id);
      setStudentInfo(response.data);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadStudentInfo();
  }, []);

  if (loading) {
    return (
      <Box>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box py={4} component="section">
      <Container className="fullwidth-container">
        <Typography variant="h1">{studentInfo?.name}</Typography>
        <Box mb={4}>
          <Breadcrumbs aria-label="breadcrumb">
            <Link to={Dashboard.ADMIN}>Home</Link>
            <Link to={Concepts.STUDENTS}>Students</Link>
            <Typography>Student {studentInfo?.name}</Typography>
          </Breadcrumbs>
        </Box>
        {studentInfo ? <StudentInfo {...studentInfo} /> : null}
      </Container>
    </Box>
  );
}
