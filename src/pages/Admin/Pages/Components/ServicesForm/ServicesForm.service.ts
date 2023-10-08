import { AxiosPromise } from 'axios';
import api from '@/src/api/axios';
import { IServicesBlockFullData } from './ServicesForm.type';
import { IBlockService } from '../types';

enum EndpointBlockServicesEnum {
  CREATE = 'block/services-create',
  UPDATE = 'block/services-update',
  PUBLISH = 'block/services/publish',
  UNPUBLISH = 'block/services/unpublish',
  GET_BLOCK = 'blocks/services/',
}

class ServicesFormService implements IBlockService<IServicesBlockFullData> {
  async publish(page: string): AxiosPromise<boolean> {
    const response = await api.patch(EndpointBlockServicesEnum.PUBLISH, {
      page: page,
    });
    return response;
  }

  async unpublish(page: string): AxiosPromise<boolean> {
    const response = await api.patch(EndpointBlockServicesEnum.UNPUBLISH, {
      page: page,
    });
    return response;
  }

  async create(
    params: IServicesBlockFullData
  ): AxiosPromise<{ message: string }> {
    const response = await api.post(EndpointBlockServicesEnum.CREATE, {
      ...params,
    });
    return response;
  }

  async update(
    params: IServicesBlockFullData
  ): AxiosPromise<{ message: string }> {
    const response = await api.patch(EndpointBlockServicesEnum.UPDATE, {
      ...params,
    });
    return response;
  }

  async getBlock(page: string): AxiosPromise<IServicesBlockFullData> {
    const response = await api.get(
      `${EndpointBlockServicesEnum.GET_BLOCK}${page}`
    );
    return response;
  }
}

export default ServicesFormService;
