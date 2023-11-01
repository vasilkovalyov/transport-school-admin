import { UpcomingEventProps } from '../UpcomingEvent/UpcomingEvent.type';

export type UpcomingEventsType = {
  events: UpcomingEventProps[];
  link: {
    path: string;
    name: string;
  };
};
