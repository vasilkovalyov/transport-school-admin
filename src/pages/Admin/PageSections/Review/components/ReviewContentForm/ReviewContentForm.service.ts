import { AxiosPromise } from 'axios';
import api from '@/src/api/axios';
import { ReviewContentFormSectionFormDataType } from './ReviewContentForm.type';

enum EndpointAchivmentSectionEnum {
  UPDATE = 'block/reuse-review',
  GET_INFO = 'block/reuse-review',
}

class AchivmentSectionFormService {
  async update(
    params: ReviewContentFormSectionFormDataType
  ): AxiosPromise<{ message: string }> {
    const response = await api.patch(EndpointAchivmentSectionEnum.UPDATE, {
      ...params,
    });
    return response;
  }

  async getInfo(): AxiosPromise<ReviewContentFormSectionFormDataType> {
    const response = await api.get(`${EndpointAchivmentSectionEnum.GET_INFO}`);
    return response;
  }
}

export default AchivmentSectionFormService;
