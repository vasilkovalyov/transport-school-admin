import { AxiosPromise } from 'axios';
import api from '@/src/api/axios';
import { AchivmentSectionFormDataType } from './AchivmentForm.type';

enum EndpointAchivmentSectionEnum {
  UPDATE = 'block/reuse-achivments',
  GET_INFO = 'block/reuse-achivments',
}

class AchivmentSectionFormService {
  async update(
    params: AchivmentSectionFormDataType
  ): AxiosPromise<{ message: string }> {
    const response = await api.patch(EndpointAchivmentSectionEnum.UPDATE, {
      ...params,
    });
    return response;
  }

  async getInfo(): AxiosPromise<AchivmentSectionFormDataType> {
    const response = await api.get(`${EndpointAchivmentSectionEnum.GET_INFO}`);
    return response;
  }
}

export default AchivmentSectionFormService;
