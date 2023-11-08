import { useState, useEffect } from 'react';

import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import LinearProgress from '@mui/material/LinearProgress';

import FeedIcon from '@mui/icons-material/Feed';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import PlayLessonIcon from '@mui/icons-material/PlayLesson';
import GroupIcon from '@mui/icons-material/Group';

import { OverviewInfo, UpcomingEvents } from './components';

import { OverviewInfoType } from './Overview.type';
import { UpcomingEventProps } from './components/UpcomingEvent/UpcomingEvent.type';

import OverviewService from './Overview.service';
import { Concepts } from '@/src/constants/routes/concepts';

const overviewService = new OverviewService();

export default function Overview() {
  const [loadingInfo, setLoadingInfo] = useState<boolean>(false);
  const [loadingEvents, setLoadingEvents] = useState<boolean>(false);
  const [overviewInfo, setOverviewInfo] = useState<OverviewInfoType>({
    blog: 0,
    lessons: 0,
    services: 0,
    students: 0,
  });

  const [events, setEvents] = useState<UpcomingEventProps[]>([]);

  async function loadInfo() {
    try {
      setLoadingInfo(true);
      const response = await overviewService.getInfo();
      setOverviewInfo(response.data);
    } catch (e) {
      console.log(e);
    } finally {
      setLoadingInfo(false);
    }
  }

  async function loadEvents() {
    try {
      setLoadingEvents(true);
      const response = await overviewService.getUpcomingEvents();
      setEvents(response.data.lessons);
    } catch (e) {
      console.log(e);
    } finally {
      setLoadingEvents(false);
    }
  }

  useEffect(() => {
    loadInfo();
    loadEvents();
  }, []);

  return (
    <Box py={4} component="section">
      <Container className="fullwidth-container">
        <Typography variant="h1">Overview</Typography>
        <Grid container columnSpacing={4} rowSpacing={4}>
          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            lg={3}
            display="flex"
            flexDirection="column"
          >
            {loadingInfo ? <LinearProgress /> : null}
            <OverviewInfo
              icon={<FeedIcon />}
              heading="Blog"
              value={overviewInfo.blog}
              link={{
                path: Concepts.BLOG,
                name: 'See all blog',
              }}
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            lg={3}
            display="flex"
            flexDirection="column"
          >
            {loadingInfo ? <LinearProgress /> : null}
            <OverviewInfo
              icon={<MiscellaneousServicesIcon />}
              heading="Services"
              value={overviewInfo.services}
              link={{
                path: Concepts.SERVICES,
                name: 'See all services',
              }}
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            lg={3}
            display="flex"
            flexDirection="column"
          >
            {loadingInfo ? <LinearProgress /> : null}
            <OverviewInfo
              icon={<PlayLessonIcon />}
              heading="Lessons"
              value={overviewInfo.lessons}
              link={{
                path: Concepts.LESSON_SCHEDULE,
                name: 'See all lessons',
              }}
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            lg={3}
            display="flex"
            flexDirection="column"
          >
            {loadingInfo ? <LinearProgress /> : null}
            <OverviewInfo
              icon={<GroupIcon />}
              heading="Students"
              value={overviewInfo.students}
            />
          </Grid>
          <Grid item xs={12} lg={7} xl={5}>
            {loadingEvents ? <LinearProgress /> : null}
            <UpcomingEvents
              events={events}
              link={{
                path: Concepts.LESSON_SCHEDULE,
                name: 'See all',
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
