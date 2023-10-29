import { AxiosPromise } from 'axios';
import api from '@/src/api/axios';
import { ScheduleBlockFullDataType } from './ScheduleForm.type';
import { IBlockService } from '../types';

enum EndpointBlockScheduleEnum {
  CREATE = 'block/schedule-create',
  UPDATE = 'block/schedule-update',
  PUBLISH = 'block/schedule/publish',
  UNPUBLISH = 'block/schedule/unpublish',
  GET_BLOCK = 'blocks/schedule/',
}

class ScheduleFormService implements IBlockService<ScheduleBlockFullDataType> {
  async publish(page: string): AxiosPromise<boolean> {
    const response = await api.patch(EndpointBlockScheduleEnum.PUBLISH, {
      page: page,
    });
    return response;
  }

  async unpublish(page: string): AxiosPromise<boolean> {
    const response = await api.patch(EndpointBlockScheduleEnum.UNPUBLISH, {
      page: page,
    });
    return response;
  }

  async create(
    params: ScheduleBlockFullDataType
  ): AxiosPromise<{ message: string }> {
    const response = await api.post(EndpointBlockScheduleEnum.CREATE, {
      ...params,
    });
    return response;
  }

  async update(
    params: ScheduleBlockFullDataType
  ): AxiosPromise<{ message: string }> {
    const response = await api.patch(EndpointBlockScheduleEnum.UPDATE, {
      ...params,
    });
    return response;
  }

  async getBlock(page: string): AxiosPromise<ScheduleBlockFullDataType> {
    const response = await api.get(
      `${EndpointBlockScheduleEnum.GET_BLOCK}${page}`
    );
    return response;
  }
}

export default ScheduleFormService;
