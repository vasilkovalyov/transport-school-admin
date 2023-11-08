import { Link } from 'react-router-dom';

import { Box } from '@mui/material';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';

import { StudentsList } from './components';

import { Concepts } from '@/src/constants/routes/concepts';
import { Dashboard } from '@/src/constants/routes/dashboard';

export default function LessonScheduleStudents() {
  return (
    <Box py={4} component="section">
      <Container className="fullwidth-container">
        <Box mb={2}>
          <Typography variant="h1">Lesson students</Typography>
        </Box>
        <Box mb={4}>
          <Breadcrumbs aria-label="breadcrumb">
            <Link to={Dashboard.ADMIN}>Home</Link>
            <Link to={Concepts.LESSON_SCHEDULE}>Lesson shedule</Link>
            <Typography>Lesson students</Typography>
          </Breadcrumbs>
        </Box>
        <StudentsList />
      </Container>
    </Box>
  );
}
