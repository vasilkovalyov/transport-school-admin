import { Link } from 'react-router-dom';
import { Box } from '@mui/material';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import UpcomingEvent from '../UpcomingEvent/UpcomingEvent';
import { UpcomingEventsType } from './UpcomingEvents.type';

import './UpcomingEvents.scss';

export default function UpcomingEvents({ events, link }: UpcomingEventsType) {
  return (
    <Paper elevation={3} className="upcoming-events">
      <Box padding={2}>
        <Typography style={{ fontSize: '18px' }} marginBottom={2}>
          Upcoming events
        </Typography>
        <Box marginBottom={2}>
          {events.length ? (
            <>
              <Box>
                {events.map((event) => (
                  <UpcomingEvent key={event._id} {...event} />
                ))}
              </Box>
              <Link to={link.path} className="upcoming-events__link">
                <Typography component="span">{link.name}</Typography>{' '}
                <ArrowForwardIcon fontSize="small" />
              </Link>
            </>
          ) : null}
        </Box>
      </Box>
    </Paper>
  );
}
