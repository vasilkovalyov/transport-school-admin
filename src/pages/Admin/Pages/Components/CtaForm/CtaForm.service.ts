import { AxiosPromise } from 'axios';
import api from '@/src/api/axios';
import { CtaFormBlockFullDataType } from './CtaForm.type';
import { IBlockService } from '../types';

enum EndpointBlockCtaEnum {
  CREATE = 'block/cta-create',
  UPDATE = 'block/cta-update',
  PUBLISH = 'block/cta/publish',
  UNPUBLISH = 'block/cta/unpublish',
  GET_BLOCK = 'blocks/cta/',
}

class CtaFormService implements IBlockService<CtaFormBlockFullDataType> {
  async publish(page: string): AxiosPromise<boolean> {
    const response = await api.patch(EndpointBlockCtaEnum.PUBLISH, {
      page: page,
    });
    return response;
  }

  async unpublish(page: string): AxiosPromise<boolean> {
    const response = await api.patch(EndpointBlockCtaEnum.UNPUBLISH, {
      page: page,
    });
    return response;
  }

  async create(
    params: CtaFormBlockFullDataType
  ): AxiosPromise<{ message: string }> {
    const response = await api.post(EndpointBlockCtaEnum.CREATE, {
      ...params,
    });
    return response;
  }

  async update(
    params: CtaFormBlockFullDataType
  ): AxiosPromise<{ message: string }> {
    const response = await api.patch(EndpointBlockCtaEnum.UPDATE, {
      ...params,
    });
    return response;
  }

  async getBlock(page: string): AxiosPromise<CtaFormBlockFullDataType> {
    const response = await api.get(`${EndpointBlockCtaEnum.GET_BLOCK}${page}`);
    return response;
  }
}

export default CtaFormService;
