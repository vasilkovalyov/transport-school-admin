import { AxiosPromise } from 'axios';
import api from '@/src/api/axios';
import { IAboutCourseBlockFullData } from './AboutCourseForm.type';
import { IBlockService } from '../types';

enum EndpointBlockAboutCourseEnum {
  CREATE = 'block/about-course-create',
  UPDATE = 'block/about-course-update',
  PUBLISH = 'block/about-course/publish',
  UNPUBLISH = 'block/about-course/unpublish',
  GET_BLOCK = 'blocks/about-course/',
}

class AboutCourseFormService
  implements IBlockService<IAboutCourseBlockFullData>
{
  async publish(page: string): AxiosPromise<boolean> {
    const response = await api.patch(EndpointBlockAboutCourseEnum.PUBLISH, {
      page: page,
    });
    return response;
  }

  async unpublish(page: string): AxiosPromise<boolean> {
    const response = await api.patch(EndpointBlockAboutCourseEnum.UNPUBLISH, {
      page: page,
    });
    return response;
  }

  async create(
    params: IAboutCourseBlockFullData
  ): AxiosPromise<{ message: string }> {
    const response = await api.post(EndpointBlockAboutCourseEnum.CREATE, {
      ...params,
    });
    return response;
  }

  async update(
    params: IAboutCourseBlockFullData
  ): AxiosPromise<{ message: string }> {
    const response = await api.patch(EndpointBlockAboutCourseEnum.UPDATE, {
      ...params,
    });
    return response;
  }

  async getBlock(page: string): AxiosPromise<IAboutCourseBlockFullData> {
    const response = await api.get(
      `${EndpointBlockAboutCourseEnum.GET_BLOCK}${page}`
    );
    return response;
  }
}

export default AboutCourseFormService;
