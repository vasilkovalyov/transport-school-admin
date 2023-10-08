import { AxiosPromise } from 'axios';
import api from '@/src/api/axios';
import { IStructEducationBlockFullData } from './StructEducationForm.type';
import { IBlockService } from '../types';

enum EndpointBlockStructEducationEnum {
  CREATE = 'block/struct-education-create',
  UPDATE = 'block/struct-education-update',
  PUBLISH = 'block/struct-education/publish',
  UNPUBLISH = 'block/struct-education/unpublish',
  GET_BLOCK = 'blocks/struct-education/',
}

class StructEducationFormService
  implements IBlockService<IStructEducationBlockFullData>
{
  async publish(page: string): AxiosPromise<boolean> {
    const response = await api.patch(EndpointBlockStructEducationEnum.PUBLISH, {
      page: page,
    });
    return response;
  }

  async unpublish(page: string): AxiosPromise<boolean> {
    const response = await api.patch(
      EndpointBlockStructEducationEnum.UNPUBLISH,
      {
        page: page,
      }
    );
    return response;
  }

  async create(
    params: IStructEducationBlockFullData
  ): AxiosPromise<{ message: string }> {
    const response = await api.post(EndpointBlockStructEducationEnum.CREATE, {
      ...params,
    });
    return response;
  }

  async update(
    params: IStructEducationBlockFullData
  ): AxiosPromise<{ message: string }> {
    const response = await api.patch(EndpointBlockStructEducationEnum.UPDATE, {
      ...params,
    });
    return response;
  }

  async getBlock(page: string): AxiosPromise<IStructEducationBlockFullData> {
    const response = await api.get(
      `${EndpointBlockStructEducationEnum.GET_BLOCK}${page}`
    );
    return response;
  }
}

export default StructEducationFormService;
