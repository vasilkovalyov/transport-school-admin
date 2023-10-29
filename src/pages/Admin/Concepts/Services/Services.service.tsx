import { AxiosPromise } from 'axios';
import { ServiceFormDataType, ServiceEditableFormData } from './components';
import api from '@/src/api/axios';

enum EndpointLessonScheduleEnum {
  CREATE = 'service-create',
  UPDATE = 'service-update',
  DELETE = 'service-delete',
  GET_POSTS = 'services',
}

class ServicesService {
  async create(
    params: ServiceEditableFormData
  ): AxiosPromise<{ message: string }> {
    const response = await api.post(EndpointLessonScheduleEnum.CREATE, {
      ...params,
    });
    return response;
  }

  async update(params: ServiceFormDataType): AxiosPromise<{ message: string }> {
    const response = await api.patch(EndpointLessonScheduleEnum.UPDATE, {
      ...params,
    });
    return response;
  }

  async delete(id: string): AxiosPromise<{ message: string }> {
    const response = await api.delete(
      `${EndpointLessonScheduleEnum.DELETE}/${id}`
    );
    return response;
  }

  async getPosts(): AxiosPromise<ServiceFormDataType[]> {
    const response = await api.get(EndpointLessonScheduleEnum.GET_POSTS);
    return response;
  }

  async getPost(id: string): AxiosPromise<ServiceFormDataType> {
    const response = await api.get(
      `${EndpointLessonScheduleEnum.GET_POSTS}/${id}`
    );
    return response;
  }
}

export default ServicesService;
