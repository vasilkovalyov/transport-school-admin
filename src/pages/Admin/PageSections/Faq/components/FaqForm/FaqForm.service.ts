import { AxiosPromise } from 'axios';
import api from '@/src/api/axios';
import { FaqSectionFormDataType } from './FaqForm.type';

enum EndpointFaqSectionEnum {
  UPDATE = 'block/reuse-faq',
  GET_INFO = 'block/reuse-faq',
}

class FaqSectionFormService {
  async update(
    params: FaqSectionFormDataType
  ): AxiosPromise<{ message: string }> {
    const response = await api.patch(EndpointFaqSectionEnum.UPDATE, {
      ...params,
    });
    return response;
  }

  async getInfo(): AxiosPromise<FaqSectionFormDataType> {
    const response = await api.get(`${EndpointFaqSectionEnum.GET_INFO}`);
    return response;
  }
}

export default FaqSectionFormService;
