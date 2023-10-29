import { AxiosPromise } from 'axios';
import api from '@/src/api/axios';
import { OurBenefitsBlockFullDataType } from './OurBenefitsForm.type';
import { IBlockService } from '../types';

enum EndpointBlockOurBenefitsEnum {
  CREATE = 'block/benefits-create',
  UPDATE = 'block/benefits-update',
  PUBLISH = 'block/benefits/publish',
  UNPUBLISH = 'block/benefits/unpublish',
  GET_BLOCK = 'blocks/benefits/',
}

class OurBenefitsFormService
  implements IBlockService<OurBenefitsBlockFullDataType>
{
  async publish(page: string): AxiosPromise<boolean> {
    const response = await api.patch(EndpointBlockOurBenefitsEnum.PUBLISH, {
      page: page,
    });
    return response;
  }

  async unpublish(page: string): AxiosPromise<boolean> {
    const response = await api.patch(EndpointBlockOurBenefitsEnum.UNPUBLISH, {
      page: page,
    });
    return response;
  }

  async create(
    params: OurBenefitsBlockFullDataType
  ): AxiosPromise<{ message: string }> {
    const response = await api.post(EndpointBlockOurBenefitsEnum.CREATE, {
      ...params,
    });
    return response;
  }

  async update(
    params: OurBenefitsBlockFullDataType
  ): AxiosPromise<{ message: string }> {
    const response = await api.patch(EndpointBlockOurBenefitsEnum.UPDATE, {
      ...params,
    });
    return response;
  }

  async getBlock(page: string): AxiosPromise<OurBenefitsBlockFullDataType> {
    const response = await api.get(
      `${EndpointBlockOurBenefitsEnum.GET_BLOCK}${page}`
    );
    return response;
  }
}

export default OurBenefitsFormService;
