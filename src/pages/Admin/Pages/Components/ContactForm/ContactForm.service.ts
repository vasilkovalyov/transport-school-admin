import { AxiosPromise } from 'axios';
import api from '@/src/api/axios';
import { ContactBlockFullDataType } from './ContactForm.type';
import { IBlockService } from '../types';

enum EndpointBlockContactFormEnum {
  CREATE = 'block/contact-form-create',
  UPDATE = 'block/contact-form-update',
  PUBLISH = 'block/contact-form/publish',
  UNPUBLISH = 'block/contact-form/unpublish',
  GET_BLOCK = 'blocks/contact-form/',
}

class ContactFormFormService
  implements IBlockService<ContactBlockFullDataType>
{
  async publish(page: string): AxiosPromise<boolean> {
    const response = await api.patch(EndpointBlockContactFormEnum.PUBLISH, {
      page: page,
    });
    return response;
  }

  async unpublish(page: string): AxiosPromise<boolean> {
    const response = await api.patch(EndpointBlockContactFormEnum.UNPUBLISH, {
      page: page,
    });
    return response;
  }

  async create(
    params: ContactBlockFullDataType
  ): AxiosPromise<{ message: string }> {
    const response = await api.post(EndpointBlockContactFormEnum.CREATE, {
      ...params,
    });
    return response;
  }

  async update(
    params: ContactBlockFullDataType
  ): AxiosPromise<{ message: string }> {
    const response = await api.patch(EndpointBlockContactFormEnum.UPDATE, {
      ...params,
    });
    return response;
  }

  async getBlock(page: string): AxiosPromise<ContactBlockFullDataType> {
    const response = await api.get(
      `${EndpointBlockContactFormEnum.GET_BLOCK}${page}`
    );
    return response;
  }
}

export default ContactFormFormService;
