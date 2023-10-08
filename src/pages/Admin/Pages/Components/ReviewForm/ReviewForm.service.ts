import { AxiosPromise } from 'axios';
import api from '@/src/api/axios';
import { IReviewBlockFullData } from './ReviewForm.type';
import { IBlockService } from '../types';

enum EndpointBlockReviewEnum {
  CREATE = 'block/reviews-create',
  UPDATE = 'block/reviews-update',
  PUBLISH = 'block/reviews/publish',
  UNPUBLISH = 'block/reviews/unpublish',
  GET_BLOCK = 'block/reviews/',
}

class ReviewFormService implements IBlockService<IReviewBlockFullData> {
  async publish(page: string): AxiosPromise<boolean> {
    const response = await api.patch(EndpointBlockReviewEnum.PUBLISH, {
      page: page,
    });
    return response;
  }

  async unpublish(page: string): AxiosPromise<boolean> {
    const response = await api.patch(EndpointBlockReviewEnum.UNPUBLISH, {
      page: page,
    });
    return response;
  }

  async create(
    params: IReviewBlockFullData
  ): AxiosPromise<{ message: string }> {
    const response = await api.post(EndpointBlockReviewEnum.CREATE, {
      ...params,
    });
    return response;
  }

  async update(
    params: IReviewBlockFullData
  ): AxiosPromise<{ message: string }> {
    const response = await api.patch(EndpointBlockReviewEnum.UPDATE, {
      ...params,
    });
    return response;
  }

  async getBlock(page: string): AxiosPromise<IReviewBlockFullData> {
    const response = await api.get(
      `${EndpointBlockReviewEnum.GET_BLOCK}${page}`
    );
    return response;
  }
}

export default ReviewFormService;
