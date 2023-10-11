import { AxiosPromise } from 'axios';
import api from '@/src/api/axios';
import { IReviewContentFormSectionFormData } from './ReviewContentForm.type';

enum EndpointAchivmentSectionEnum {
  UPDATE = 'block/reuse-review',
  GET_INFO = 'block/reuse-review',
}

class AchivmentSectionFormService {
  async update(
    params: IReviewContentFormSectionFormData
  ): AxiosPromise<{ message: string }> {
    const response = await api.patch(EndpointAchivmentSectionEnum.UPDATE, {
      ...params,
    });
    return response;
  }

  async getInfo(): AxiosPromise<IReviewContentFormSectionFormData> {
    const response = await api.get(`${EndpointAchivmentSectionEnum.GET_INFO}`);
    return response;
  }
}

export default AchivmentSectionFormService;
