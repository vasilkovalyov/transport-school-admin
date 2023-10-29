import { AxiosPromise } from 'axios';
import api from '@/src/api/axios';
import { ContactsSectionFormDataType } from './ContactsForm.type';

enum EndpointContactsSectionEnum {
  UPDATE = 'block/reuse-contacts',
  GET_INFO = 'block/reuse-contacts',
}

class ContactsSectionFormService {
  async update(
    params: ContactsSectionFormDataType
  ): AxiosPromise<{ message: string }> {
    const response = await api.patch(EndpointContactsSectionEnum.UPDATE, {
      ...params,
    });
    return response;
  }

  async getInfo(): AxiosPromise<ContactsSectionFormDataType> {
    const response = await api.get(`${EndpointContactsSectionEnum.GET_INFO}`);
    return response;
  }
}

export default ContactsSectionFormService;
