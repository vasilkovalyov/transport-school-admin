import { AxiosPromise } from 'axios';
import api from '@/src/api/axios';
import { IFaqFormBlockFullData } from './FaqForm.type';
import { IBlockService } from '../types';

enum EndpointBlockFaqEnum {
  CREATE = 'block/faq-create',
  UPDATE = 'block/faq-update',
  PUBLISH = 'block/faq/publish',
  UNPUBLISH = 'block/faq/unpublish',
  GET_BLOCK = 'blocks/faq/',
}

class FaqFormService implements IBlockService<IFaqFormBlockFullData> {
  async publish(page: string): AxiosPromise<boolean> {
    const response = await api.patch(EndpointBlockFaqEnum.PUBLISH, {
      page: page,
    });
    return response;
  }

  async unpublish(page: string): AxiosPromise<boolean> {
    const response = await api.patch(EndpointBlockFaqEnum.UNPUBLISH, {
      page: page,
    });
    return response;
  }

  async create(
    params: IFaqFormBlockFullData
  ): AxiosPromise<{ message: string }> {
    const response = await api.post(EndpointBlockFaqEnum.CREATE, {
      ...params,
    });
    return response;
  }

  async update(
    params: IFaqFormBlockFullData
  ): AxiosPromise<{ message: string }> {
    const response = await api.patch(EndpointBlockFaqEnum.UPDATE, {
      ...params,
    });
    return response;
  }

  async getBlock(page: string): AxiosPromise<IFaqFormBlockFullData> {
    const response = await api.get(`${EndpointBlockFaqEnum.GET_BLOCK}${page}`);
    return response;
  }
}

export default FaqFormService;
