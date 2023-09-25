import { Link } from 'react-router-dom';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';

import { Links } from '@/src/constants/routes';

export default function CreateLessonSchedule() {
  return (
    <Box py={4} component="section">
      <Container className="fullwidth-container">
        <Typography variant="h1">Create schedule</Typography>
        <Breadcrumbs aria-label="breadcrumb">
          <Link to={Links.ADMIN}>Home</Link>
          <Link to={Links.ADMIN_LESSON_SCHEDULE}>Lesson shedule</Link>
          <Typography>Create lesson schedule</Typography>
        </Breadcrumbs>
      </Container>
    </Box>
  );
}
