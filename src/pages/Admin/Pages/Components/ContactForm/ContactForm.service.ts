import { AxiosPromise } from 'axios';
import api from '@/src/api/axios';
import { IContactBlockFullData } from './ContactForm.type';
import { IBlockService } from '../types';

enum EndpointBlockContactFormEnum {
  CREATE = 'block/contact-form-create',
  UPDATE = 'block/contact-form-update',
  PUBLISH = 'block/contact-form/publish',
  UNPUBLISH = 'block/contact-form/unpublish',
  GET_BLOCK = 'blocks/contact-form/',
}

class ContactFormFormService implements IBlockService<IContactBlockFullData> {
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
    params: IContactBlockFullData
  ): AxiosPromise<{ message: string }> {
    const response = await api.post(EndpointBlockContactFormEnum.CREATE, {
      ...params,
    });
    return response;
  }

  async update(
    params: IContactBlockFullData
  ): AxiosPromise<{ message: string }> {
    const response = await api.patch(EndpointBlockContactFormEnum.UPDATE, {
      ...params,
    });
    return response;
  }

  async getBlock(page: string): AxiosPromise<IContactBlockFullData> {
    const response = await api.get(
      `${EndpointBlockContactFormEnum.GET_BLOCK}${page}`
    );
    return response;
  }
}

export default ContactFormFormService;
