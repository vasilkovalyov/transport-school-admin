import { AxiosPromise } from 'axios';
import api from '@/src/api/axios';
import { ReviewType, ReviewFormDataType } from './components';

export enum EndpointsReviewSectionFormEnum {
  CREATE_REVIEW = 'review',
  UPDATE_REVIEW = 'review',
  DELETE_REVIEW = 'review',
  GET_REVIEW = 'review',
  GET_REVIEWS = 'reviews',
}

class ReviewSectionFormService {
  async create(params: ReviewFormDataType): AxiosPromise<{ message: string }> {
    const response = await api.post(
      EndpointsReviewSectionFormEnum.CREATE_REVIEW,
      {
        ...params,
      }
    );
    return response;
  }

  async update(params: ReviewType): AxiosPromise<{ message: string }> {
    const response = await api.patch(
      EndpointsReviewSectionFormEnum.UPDATE_REVIEW,
      {
        ...params,
      }
    );
    return response;
  }

  async delete(id: string): AxiosPromise<{ message: string }> {
    const response = await api.delete(
      `${EndpointsReviewSectionFormEnum.DELETE_REVIEW}/${id}`
    );
    return response;
  }

  async getPost(id: string): AxiosPromise<ReviewType> {
    const response = await api.get(
      `${EndpointsReviewSectionFormEnum.GET_REVIEW}/${id}`
    );
    return response;
  }

  async getAll(): AxiosPromise<ReviewType[]> {
    const response = await api.get(EndpointsReviewSectionFormEnum.GET_REVIEWS);
    return response;
  }
}

export default ReviewSectionFormService;
