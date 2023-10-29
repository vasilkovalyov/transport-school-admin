import { AxiosPromise } from 'axios';
import api from '@/src/api/axios';
import { SeoFullDataType } from './SeoForm.type';

enum EndpointSeoEnum {
  UPDATE = 'seo',
  GET_INFO = 'seo/',
}

class SeoFormService {
  async update(params: SeoFullDataType): AxiosPromise<{ message: string }> {
    const response = await api.patch(EndpointSeoEnum.UPDATE, {
      ...params,
    });
    return response;
  }

  async getInfo(page: string): AxiosPromise<SeoFullDataType> {
    const response = await api.get(`${EndpointSeoEnum.GET_INFO}${page}`);
    return response;
  }
}

export default SeoFormService;
