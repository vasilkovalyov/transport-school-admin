import dayjs from 'dayjs';

import { Box, Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

import { UpcomingEventProps } from './UpcomingEvent.type';

import './UpcomingEvent.scss';

export default function UpcomingEvent({
  date_start_event,
  heading,
  max_people,
  time_end,
  time_start,
  students,
}: UpcomingEventProps) {
  return (
    <Box className="upcoming-event" mb={2}>
      <Stack
        direction="row"
        spacing={4}
        alignItems="flex-start"
        justifyContent="space-between"
      >
        <Stack direction="row" spacing={4} alignItems="flex-start">
          <Box className="upcoming-event__date" textAlign="center" padding={1}>
            <Typography
              variant="h6"
              fontSize={12}
              fontWeight={400}
              textTransform="uppercase"
              marginBottom={1}
            >
              {dayjs(date_start_event).format('MMM')}
            </Typography>
            <Typography variant="h6" fontSize={15} marginBottom={0}>
              {dayjs(date_start_event).format('D')}
            </Typography>
          </Box>
          <Box>
            <Typography fontSize={14}>{heading}</Typography>
            <Typography fontSize={14}>
              {time_start} - {time_end}
            </Typography>
            <Typography>
              Students - {students || 0} / {max_people}
            </Typography>
          </Box>
        </Stack>
        <Box>
          <CalendarMonthIcon fontSize="small" />
        </Box>
      </Stack>
    </Box>
  );
}
