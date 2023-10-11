import { AxiosPromise } from 'axios';
import api from '@/src/api/axios';
import { IContactsSectionFormData } from './ContactsForm.type';

enum EndpointContactsSectionEnum {
  UPDATE = 'block/reuse-contacts',
  GET_INFO = 'block/reuse-contacts',
}

class ContactsSectionFormService {
  async update(
    params: IContactsSectionFormData
  ): AxiosPromise<{ message: string }> {
    const response = await api.patch(EndpointContactsSectionEnum.UPDATE, {
      ...params,
    });
    return response;
  }

  async getInfo(): AxiosPromise<IContactsSectionFormData> {
    const response = await api.get(`${EndpointContactsSectionEnum.GET_INFO}`);
    return response;
  }
}

export default ContactsSectionFormService;
