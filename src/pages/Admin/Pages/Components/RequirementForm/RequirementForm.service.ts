import { AxiosPromise } from 'axios';
import api from '@/src/api/axios';
import { IRequirementBlockFullData } from './RequirementForm.type';
import { IBlockService } from '../types';

enum EndpointBlockRequirmentEnum {
  CREATE = 'block/requirement-create',
  UPDATE = 'block/requirement-update',
  PUBLISH = 'block/requirement/publish',
  UNPUBLISH = 'block/requirement/unpublish',
  GET_BLOCK = 'blocks/requirement/',
}

class RequirementFormService
  implements IBlockService<IRequirementBlockFullData>
{
  async publish(page: string): AxiosPromise<boolean> {
    const response = await api.patch(EndpointBlockRequirmentEnum.PUBLISH, {
      page: page,
    });
    return response;
  }

  async unpublish(page: string): AxiosPromise<boolean> {
    const response = await api.patch(EndpointBlockRequirmentEnum.UNPUBLISH, {
      page: page,
    });
    return response;
  }

  async create(
    params: IRequirementBlockFullData
  ): AxiosPromise<{ message: string }> {
    const response = await api.post(EndpointBlockRequirmentEnum.CREATE, {
      ...params,
    });
    return response;
  }

  async update(
    params: IRequirementBlockFullData
  ): AxiosPromise<{ message: string }> {
    const response = await api.patch(EndpointBlockRequirmentEnum.UPDATE, {
      ...params,
    });
    return response;
  }

  async getBlock(page: string): AxiosPromise<IRequirementBlockFullData> {
    const response = await api.get(
      `${EndpointBlockRequirmentEnum.GET_BLOCK}${page}`
    );
    return response;
  }
}

export default RequirementFormService;
