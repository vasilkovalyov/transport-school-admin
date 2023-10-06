import { AxiosPromise } from 'axios';
import api from '@/src/api/axios';
import { IHeroBlockFullData } from './HeroForm.type';
import { EndpointsBlocksEnum } from '@/src/api/endpoints';
import { IBlockService } from '../types';

class HeroFormService implements IBlockService<IHeroBlockFullData> {
  async publish(page: string): AxiosPromise<boolean> {
    const response = await api.patch(EndpointsBlocksEnum.HERO_PUBLISH, {
      page: page,
    });
    return response;
  }

  async unpublish(page: string): AxiosPromise<boolean> {
    const response = await api.patch(EndpointsBlocksEnum.HERO_UNPUBLISH, {
      page: page,
    });
    return response;
  }

  async create(params: IHeroBlockFullData): AxiosPromise<{ message: string }> {
    const response = await api.post(EndpointsBlocksEnum.HERO_CREATE, {
      ...params,
    });
    return response;
  }

  async update(params: IHeroBlockFullData): AxiosPromise<{ message: string }> {
    const response = await api.patch(EndpointsBlocksEnum.HERO_UPDATE, {
      ...params,
    });
    return response;
  }

  async getBlock(page: string): AxiosPromise<IHeroBlockFullData> {
    const response = await api.get(`${EndpointsBlocksEnum.HERO_GET}${page}`);
    return response;
  }
}

export default HeroFormService;
