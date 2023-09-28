import { Link, useNavigate } from 'react-router-dom';

import { Box } from '@mui/material';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';

import { Links, LinksConcepts } from '@/src/constants/routes';
import { LessonsList } from './components';

export default function LessonSchedule() {
  const navigate = useNavigate();

  return (
    <Box py={4} component="section">
      <Container className="fullwidth-container">
        <Grid container justifyContent="space-between" columnSpacing={4} mb={2}>
          <Grid item>
            <Typography variant="h1">Lesson schedule</Typography>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              size="small"
              onClick={() => {
                navigate(LinksConcepts.LESSON_SCHEDULE_CREATE);
              }}
            >
              Create Lesson
            </Button>
          </Grid>
        </Grid>
        <Box mb={4}>
          <Breadcrumbs aria-label="breadcrumb">
            <Link to={Links.ADMIN}>Home</Link>
            <Typography>Lesson shedule</Typography>
          </Breadcrumbs>
        </Box>
        <LessonsList />
      </Container>
    </Box>
  );
}
