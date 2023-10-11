import { AxiosPromise } from 'axios';
import api from '@/src/api/axios';
import { ICtaSectionFormData } from './CtaForm.type';

enum EndpointCtaSectionEnum {
  UPDATE = 'block/reuse-cta',
  GET_INFO = 'block/reuse-cta',
}

class CtaSectionFormService {
  async update(params: ICtaSectionFormData): AxiosPromise<{ message: string }> {
    const response = await api.patch(EndpointCtaSectionEnum.UPDATE, {
      ...params,
    });
    return response;
  }

  async getInfo(): AxiosPromise<ICtaSectionFormData> {
    const response = await api.get(`${EndpointCtaSectionEnum.GET_INFO}`);
    return response;
  }
}

export default CtaSectionFormService;
