import { AxiosPromise } from 'axios';
import api from '@/src/api/axios';
import { HeroBlockFullDataType } from './HeroForm.type';
import { IBlockService } from '../types';

enum EndpointBlockHeroEnum {
  CREATE = 'block/hero-create',
  UPDATE = 'block/hero-update',
  PUBLISH = 'block/hero/publish',
  UNPUBLISH = 'block/hero/unpublish',
  GET_BLOCK = 'blocks/hero/',
}

class HeroFormService implements IBlockService<HeroBlockFullDataType> {
  async publish(page: string): AxiosPromise<boolean> {
    const response = await api.patch(EndpointBlockHeroEnum.PUBLISH, {
      page: page,
    });
    return response;
  }

  async unpublish(page: string): AxiosPromise<boolean> {
    const response = await api.patch(EndpointBlockHeroEnum.UNPUBLISH, {
      page: page,
    });
    return response;
  }

  async create(
    params: HeroBlockFullDataType
  ): AxiosPromise<{ message: string }> {
    const response = await api.post(EndpointBlockHeroEnum.CREATE, {
      ...params,
    });
    return response;
  }

  async update(
    params: HeroBlockFullDataType
  ): AxiosPromise<{ message: string }> {
    const response = await api.patch(EndpointBlockHeroEnum.UPDATE, {
      ...params,
    });
    return response;
  }

  async getBlock(page: string): AxiosPromise<HeroBlockFullDataType> {
    const response = await api.get(`${EndpointBlockHeroEnum.GET_BLOCK}${page}`);
    return response;
  }
}

export default HeroFormService;
