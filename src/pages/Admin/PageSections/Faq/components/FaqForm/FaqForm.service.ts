import { AxiosPromise } from 'axios';
import api from '@/src/api/axios';
import { IFaqSectionFormData } from './FaqForm.type';

enum EndpointFaqSectionEnum {
  UPDATE = 'block/reuse-faq',
  GET_INFO = 'block/reuse-faq',
}

class FaqSectionFormService {
  async update(params: IFaqSectionFormData): AxiosPromise<{ message: string }> {
    const response = await api.patch(EndpointFaqSectionEnum.UPDATE, {
      ...params,
    });
    return response;
  }

  async getInfo(): AxiosPromise<IFaqSectionFormData> {
    const response = await api.get(`${EndpointFaqSectionEnum.GET_INFO}`);
    return response;
  }
}

export default FaqSectionFormService;
