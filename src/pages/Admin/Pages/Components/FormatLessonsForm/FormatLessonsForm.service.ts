import { AxiosPromise } from 'axios';
import api from '@/src/api/axios';
import { FormatLessonsBlockFullDataType } from './FormatLessonsForm.type';
import { IBlockService } from '../types';

enum EndpointBlockFormatLessonEnum {
  CREATE = 'block/format-lessons-create',
  UPDATE = 'block/format-lessons-update',
  PUBLISH = 'block/format-lessons/publish',
  UNPUBLISH = 'block/format-lessons/unpublish',
  GET_BLOCK = 'blocks/format-lessons/',
}

class FormatLessonsFormService
  implements IBlockService<FormatLessonsBlockFullDataType>
{
  async publish(page: string): AxiosPromise<boolean> {
    const response = await api.patch(EndpointBlockFormatLessonEnum.PUBLISH, {
      page: page,
    });
    return response;
  }

  async unpublish(page: string): AxiosPromise<boolean> {
    const response = await api.patch(EndpointBlockFormatLessonEnum.UNPUBLISH, {
      page: page,
    });
    return response;
  }

  async create(
    params: FormatLessonsBlockFullDataType
  ): AxiosPromise<{ message: string }> {
    const response = await api.post(EndpointBlockFormatLessonEnum.CREATE, {
      ...params,
    });
    return response;
  }

  async update(
    params: FormatLessonsBlockFullDataType
  ): AxiosPromise<{ message: string }> {
    const response = await api.patch(EndpointBlockFormatLessonEnum.UPDATE, {
      ...params,
    });
    return response;
  }

  async getBlock(page: string): AxiosPromise<FormatLessonsBlockFullDataType> {
    const response = await api.get(
      `${EndpointBlockFormatLessonEnum.GET_BLOCK}${page}`
    );
    return response;
  }
}

export default FormatLessonsFormService;
