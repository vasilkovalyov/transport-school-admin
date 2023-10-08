import { AxiosPromise } from 'axios';
import api from '@/src/api/axios';
import { ICourseForPeopleFullData } from './CourseForPeopleForm.type';
import { IBlockService } from '../types';

enum EndpointBlockCourseForPeopleEnum {
  CREATE = 'block/course-for-people-create',
  UPDATE = 'block/course-for-people-update',
  PUBLISH = 'block/course-for-people/publish',
  UNPUBLISH = 'block/course-for-people/unpublish',
  GET_BLOCK = 'blocks/course-for-people/',
}

class CourseForPeopleFormService
  implements IBlockService<ICourseForPeopleFullData>
{
  async publish(page: string): AxiosPromise<boolean> {
    const response = await api.patch(EndpointBlockCourseForPeopleEnum.PUBLISH, {
      page: page,
    });
    return response;
  }

  async unpublish(page: string): AxiosPromise<boolean> {
    const response = await api.patch(
      EndpointBlockCourseForPeopleEnum.UNPUBLISH,
      {
        page: page,
      }
    );
    return response;
  }

  async create(
    params: ICourseForPeopleFullData
  ): AxiosPromise<{ message: string }> {
    const response = await api.post(EndpointBlockCourseForPeopleEnum.CREATE, {
      ...params,
    });
    return response;
  }

  async update(
    params: ICourseForPeopleFullData
  ): AxiosPromise<{ message: string }> {
    const response = await api.patch(EndpointBlockCourseForPeopleEnum.UPDATE, {
      ...params,
    });
    return response;
  }

  async getBlock(page: string): AxiosPromise<ICourseForPeopleFullData> {
    const response = await api.get(
      `${EndpointBlockCourseForPeopleEnum.GET_BLOCK}${page}`
    );
    return response;
  }
}

export default CourseForPeopleFormService;
