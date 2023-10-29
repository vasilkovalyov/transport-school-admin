import { AxiosPromise } from 'axios';
import api from '@/src/api/axios';
import { AboutUsBlockFullDataType } from './AboutUsForm.type';
import { IBlockService } from '../types';

enum EndpointBlockAboutUsEnum {
  CREATE = 'block/about-us-create',
  UPDATE = 'block/about-us-update',
  PUBLISH = 'block/about-us/publish',
  UNPUBLISH = 'block/about-us/unpublish',
  GET_BLOCK = 'blocks/about-us/',
}

class AboutUsFormService implements IBlockService<AboutUsBlockFullDataType> {
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
    params: AboutUsBlockFullDataType
  ): AxiosPromise<{ message: string }> {
    const response = await api.post(EndpointBlockAboutUsEnum.CREATE, {
      ...params,
    });
    return response;
  }

  async update(
    params: AboutUsBlockFullDataType
  ): AxiosPromise<{ message: string }> {
    const response = await api.patch(EndpointBlockAboutUsEnum.UPDATE, {
      ...params,
    });
    return response;
  }

  async getBlock(page: string): AxiosPromise<AboutUsBlockFullDataType> {
    const response = await api.get(
      `${EndpointBlockAboutUsEnum.GET_BLOCK}${page}`
    );
    return response;
  }
}

export default AboutUsFormService;
