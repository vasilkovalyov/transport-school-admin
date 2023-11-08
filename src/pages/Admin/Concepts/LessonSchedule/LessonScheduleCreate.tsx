import { Link } from 'react-router-dom';

import { Box } from '@mui/material';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';

import { Concepts } from '@/src/constants/routes/concepts';
import { Dashboard } from '@/src/constants/routes/dashboard';
import { BlockCreateLesson } from './components';

export default function LessonScheduleCreate() {
  return (
    <Box py={4} component="section">
      <Container className="fullwidth-container">
        <Typography variant="h1">Create schedule</Typography>
        <Box mb={4}>
          <Breadcrumbs aria-label="breadcrumb">
            <Link to={Dashboard.ADMIN}>Home</Link>
            <Link to={Concepts.LESSON_SCHEDULE}>Lesson shedule</Link>
            <Typography>Create lesson schedule</Typography>
          </Breadcrumbs>
        </Box>
        <BlockCreateLesson />
      </Container>
    </Box>
  );
}
