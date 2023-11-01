import { Link } from 'react-router-dom';

import { Box } from '@mui/material';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';

import { StudentsList } from './components';

import { Links, LinksConcepts } from '@/src/constants/routes';

export default function LessonScheduleStudents() {
  return (
    <Box py={4} component="section">
      <Container className="fullwidth-container">
        <Box mb={2}>
          <Typography variant="h1">Lesson students</Typography>
        </Box>
        <Box mb={4}>
          <Breadcrumbs aria-label="breadcrumb">
            <Link to={Links.ADMIN}>Home</Link>
            <Link to={LinksConcepts.LESSON_SCHEDULE}>Lesson shedule</Link>
            <Typography>Lesson students</Typography>
          </Breadcrumbs>
        </Box>
        <StudentsList />
      </Container>
    </Box>
  );
}
