import { AxiosPromise } from 'axios';
import api from '@/src/api/axios';
import { IAboutUsBlockFullData } from './AboutUsForm.type';
import { IBlockService } from '../types';

enum EndpointBlockAboutUsEnum {
  CREATE = 'block/about-us-create',
  UPDATE = 'block/about-us-update',
  PUBLISH = 'block/about-us/publish',
  UNPUBLISH = 'block/about-us/unpublish',
  GET_BLOCK = 'blocks/about-us/',
}

class AboutUsFormService implements IBlockService<IAboutUsBlockFullData> {
  async publish(page: string): AxiosPromise<boolean> {
    const response = await api.patch(EndpointBlockAboutUsEnum.PUBLISH, {
      page: page,
    });
    return response;
  }

  async unpublish(page: string): AxiosPromise<boolean> {
    const response = await api.patch(EndpointBlockAboutUsEnum.UNPUBLISH, {
      page: page,
    });
    return response;
  }

  async create(
    params: IAboutUsBlockFullData
  ): AxiosPromise<{ message: string }> {
    const response = await api.post(EndpointBlockAboutUsEnum.CREATE, {
      ...params,
    });
    return response;
  }

  async update(
    params: IAboutUsBlockFullData
  ): AxiosPromise<{ message: string }> {
    const response = await api.patch(EndpointBlockAboutUsEnum.UPDATE, {
      ...params,
    });
    return response;
  }

  async getBlock(page: string): AxiosPromise<IAboutUsBlockFullData> {
    const response = await api.get(
      `${EndpointBlockAboutUsEnum.GET_BLOCK}${page}`
    );
    return response;
  }
}

export default AboutUsFormService;
