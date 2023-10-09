import { AxiosPromise } from 'axios';
import api from '@/src/api/axios';
import { ISeoFullData } from './SeoForm.type';

enum EndpointSeoEnum {
  UPDATE = 'seo',
  GET_INFO = 'seo/',
}

class SeoFormService {
  async update(params: ISeoFullData): AxiosPromise<{ message: string }> {
    const response = await api.patch(EndpointSeoEnum.UPDATE, {
      ...params,
    });
    return response;
  }

  async getInfo(page: string): AxiosPromise<ISeoFullData> {
    const response = await api.get(`${EndpointSeoEnum.GET_INFO}${page}`);
    return response;
  }
}

export default SeoFormService;
