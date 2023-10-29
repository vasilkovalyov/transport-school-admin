import { AxiosPromise } from 'axios';
import api from '@/src/api/axios';
import { ContactsBlockFullDataType } from './ContactsForm.type';
import { IBlockService } from '../types';

enum EndpointBlockContactsEnum {
  CREATE = 'block/contacts-create',
  UPDATE = 'block/contacts-update',
  PUBLISH = 'block/contacts/publish',
  UNPUBLISH = 'block/contacts/unpublish',
  GET_BLOCK = 'block/contacts/',
}

class ContactsFormService implements IBlockService<ContactsBlockFullDataType> {
  async publish(page: string): AxiosPromise<boolean> {
    const response = await api.patch(EndpointBlockContactsEnum.PUBLISH, {
      page: page,
    });
    return response;
  }

  async unpublish(page: string): AxiosPromise<boolean> {
    const response = await api.patch(EndpointBlockContactsEnum.UNPUBLISH, {
      page: page,
    });
    return response;
  }

  async create(
    params: ContactsBlockFullDataType
  ): AxiosPromise<{ message: string }> {
    const response = await api.post(EndpointBlockContactsEnum.CREATE, {
      ...params,
    });
    return response;
  }

  async update(
    params: ContactsBlockFullDataType
  ): AxiosPromise<{ message: string }> {
    const response = await api.patch(EndpointBlockContactsEnum.UPDATE, {
      ...params,
    });
    return response;
  }

  async getBlock(page: string): AxiosPromise<ContactsBlockFullDataType> {
    const response = await api.get(
      `${EndpointBlockContactsEnum.GET_BLOCK}${page}`
    );
    return response;
  }
}

export default ContactsFormService;
