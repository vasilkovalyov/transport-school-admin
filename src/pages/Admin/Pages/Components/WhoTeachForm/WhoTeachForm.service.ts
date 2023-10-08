import { AxiosPromise } from 'axios';
import api from '@/src/api/axios';
import { IWhoTeachBlockFullData } from './WhoTeachForm.type';
import { IBlockService } from '../types';

enum EndpointBlockWhoTeachEnum {
  CREATE = 'block/who-teach-create',
  UPDATE = 'block/who-teach-update',
  PUBLISH = 'block/who-teach/publish',
  UNPUBLISH = 'block/who-teach/unpublish',
  GET_BLOCK = 'blocks/who-teach/',
}

class WhoTeachFormService implements IBlockService<IWhoTeachBlockFullData> {
  async publish(page: string): AxiosPromise<boolean> {
    const response = await api.patch(EndpointBlockWhoTeachEnum.PUBLISH, {
      page: page,
    });
    return response;
  }

  async unpublish(page: string): AxiosPromise<boolean> {
    const response = await api.patch(EndpointBlockWhoTeachEnum.UNPUBLISH, {
      page: page,
    });
    return response;
  }

  async create(
    params: IWhoTeachBlockFullData
  ): AxiosPromise<{ message: string }> {
    const response = await api.post(EndpointBlockWhoTeachEnum.CREATE, {
      ...params,
    });
    return response;
  }

  async update(
    params: IWhoTeachBlockFullData
  ): AxiosPromise<{ message: string }> {
    const response = await api.patch(EndpointBlockWhoTeachEnum.UPDATE, {
      ...params,
    });
    return response;
  }

  async getBlock(page: string): AxiosPromise<IWhoTeachBlockFullData> {
    const response = await api.get(
      `${EndpointBlockWhoTeachEnum.GET_BLOCK}${page}`
    );
    return response;
  }
}

export default WhoTeachFormService;
