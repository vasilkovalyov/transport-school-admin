import { AxiosPromise } from 'axios';
import api from '@/src/api/axios';
import { SocialFormDataType } from './SocialForm.type';

enum EndpointSocialEnum {
  UPDATE = 'socials',
  GET_INFO = 'socials',
}

class SocialFormService {
  async update(params: SocialFormDataType): AxiosPromise<string> {
    const response = await api.patch(EndpointSocialEnum.UPDATE, params);
    return response;
  }
  async getInfo(): AxiosPromise<SocialFormDataType> {
    const response = await api.get(EndpointSocialEnum.GET_INFO);
    return response;
  }
}

export default SocialFormService;
