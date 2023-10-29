import { AxiosPromise } from 'axios';
import api from '@/src/api/axios';
import { ReviewFormBlockFullDataType } from './ReviewForm.type';
import { IBlockService } from '../types';

enum EndpointBlockReviewEnum {
  CREATE = 'block/review-create',
  UPDATE = 'block/review-update',
  PUBLISH = 'block/review/publish',
  UNPUBLISH = 'block/review/unpublish',
  GET_BLOCK = 'block/review/',
}

class ReviewFormService implements IBlockService<ReviewFormBlockFullDataType> {
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
    params: ReviewFormBlockFullDataType
  ): AxiosPromise<{ message: string }> {
    const response = await api.post(EndpointBlockReviewEnum.CREATE, {
      ...params,
    });
    return response;
  }

  async update(
    params: ReviewFormBlockFullDataType
  ): AxiosPromise<{ message: string }> {
    const response = await api.patch(EndpointBlockReviewEnum.UPDATE, {
      ...params,
    });
    return response;
  }

  async getBlock(page: string): AxiosPromise<ReviewFormBlockFullDataType> {
    const response = await api.get(
      `${EndpointBlockReviewEnum.GET_BLOCK}${page}`
    );
    return response;
  }
}

export default ReviewFormService;
