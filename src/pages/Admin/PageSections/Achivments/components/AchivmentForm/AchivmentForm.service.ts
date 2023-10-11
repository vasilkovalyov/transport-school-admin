import { AxiosPromise } from 'axios';
import api from '@/src/api/axios';
import { IAchivmentSectionFormData } from './AchivmentForm.type';

enum EndpointAchivmentSectionEnum {
  UPDATE = 'block/reuse-achivments',
  GET_INFO = 'block/reuse-achivments',
}

class AchivmentSectionFormService {
  async update(
    params: IAchivmentSectionFormData
  ): AxiosPromise<{ message: string }> {
    const response = await api.patch(EndpointAchivmentSectionEnum.UPDATE, {
      ...params,
    });
    return response;
  }

  async getInfo(): AxiosPromise<IAchivmentSectionFormData> {
    const response = await api.get(`${EndpointAchivmentSectionEnum.GET_INFO}`);
    return response;
  }
}

export default AchivmentSectionFormService;
