import { AxiosPromise } from 'axios';
import api from '@/src/api/axios';
import { IAchivmentsFormBlockFullData } from './AchivmentsForm.type';
import { IBlockService } from '../types';

enum EndpointBlockAchivmentsEnum {
  CREATE = 'block/achivments-create',
  UPDATE = 'block/achivments-update',
  PUBLISH = 'block/achivments/publish',
  UNPUBLISH = 'block/achivments/unpublish',
  GET_BLOCK = 'blocks/achivments/',
}

class AchivmentsFormService
  implements IBlockService<IAchivmentsFormBlockFullData>
{
  async publish(page: string): AxiosPromise<boolean> {
    const response = await api.patch(EndpointBlockAchivmentsEnum.PUBLISH, {
      page: page,
    });
    return response;
  }

  async unpublish(page: string): AxiosPromise<boolean> {
    const response = await api.patch(EndpointBlockAchivmentsEnum.UNPUBLISH, {
      page: page,
    });
    return response;
  }

  async create(
    params: IAchivmentsFormBlockFullData
  ): AxiosPromise<{ message: string }> {
    const response = await api.post(EndpointBlockAchivmentsEnum.CREATE, {
      ...params,
    });
    return response;
  }

  async update(
    params: IAchivmentsFormBlockFullData
  ): AxiosPromise<{ message: string }> {
    const response = await api.patch(EndpointBlockAchivmentsEnum.UPDATE, {
      ...params,
    });
    return response;
  }

  async getBlock(page: string): AxiosPromise<IAchivmentsFormBlockFullData> {
    const response = await api.get(
      `${EndpointBlockAchivmentsEnum.GET_BLOCK}${page}`
    );
    return response;
  }
}

export default AchivmentsFormService;
