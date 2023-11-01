import { AxiosPromise } from 'axios';
import api from '@/src/api/axios';
import { OverviewInfoType } from './Overview.type';
import { UpcomingEventProps } from './components/UpcomingEvent/UpcomingEvent.type';

enum EndpointLessonScheduleEnum {
  GET_INFO = 'overview-info',
  GET_UPCOMING_EVENTS = 'overview-upcomming-events',
}

class OverviewService {
  async getInfo(): AxiosPromise<OverviewInfoType> {
    const response = await api.get(EndpointLessonScheduleEnum.GET_INFO);
    return response;
  }

  async getUpcomingEvents(): AxiosPromise<{ lessons: UpcomingEventProps[] }> {
    const response = await api.get(
      EndpointLessonScheduleEnum.GET_UPCOMING_EVENTS
    );
    return response;
  }
}

export default OverviewService;
