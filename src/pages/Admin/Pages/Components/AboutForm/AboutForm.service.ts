import { AxiosPromise } from 'axios';
import api from '@/src/api/axios';
import { AboutBlockFullDataType } from './AboutForm.type';
import { IBlockService } from '../types';

enum EndpointBlockAboutEnum {
  CREATE = 'block/about-create',
  UPDATE = 'block/about-update',
  PUBLISH = 'block/about/publish',
  UNPUBLISH = 'block/about/unpublish',
  GET_BLOCK = 'blocks/about/',
}

class AboutFormService implements IBlockService<AboutBlockFullDataType> {
  async publish(page: string): AxiosPromise<boolean> {
    const response = await api.patch(EndpointBlockAboutEnum.PUBLISH, {
      page: page,
    });
    return response;
  }

  async unpublish(page: string): AxiosPromise<boolean> {
    const response = await api.patch(EndpointBlockAboutEnum.UNPUBLISH, {
      page: page,
    });
    return response;
  }

  async create(
    params: AboutBlockFullDataType
  ): AxiosPromise<{ message: string }> {
    const response = await api.post(EndpointBlockAboutEnum.CREATE, {
      ...params,
    });
    return response;
  }

  async update(
    params: AboutBlockFullDataType
  ): AxiosPromise<{ message: string }> {
    const response = await api.patch(EndpointBlockAboutEnum.UPDATE, {
      ...params,
    });
    return response;
  }

  async getBlock(page: string): AxiosPromise<AboutBlockFullDataType> {
    const response = await api.get(
      `${EndpointBlockAboutEnum.GET_BLOCK}${page}`
    );
    return response;
  }
}

export default AboutFormService;
