import { AxiosPromise } from 'axios';
import api from '@/src/api/axios';
import { IFormContactsData } from './FormContacts.type';

enum EndpointContactEnum {
  UPDATE = 'contacts',
  GET_INFO = 'contacts',
}

class ContactFormService {
  async update(params: IFormContactsData): AxiosPromise<string> {
    const response = await api.patch(EndpointContactEnum.UPDATE, params);
    return response;
  }
  async getInfo(): AxiosPromise<IFormContactsData> {
    const response = await api.get(EndpointContactEnum.GET_INFO);
    return response;
  }
}

export default ContactFormService;
