import { AxiosPromise } from 'axios';
import api from '@/src/api/axios';
import { ReviewType, ReviewFormDataType } from './components';

const endpointReview = 'review';
const endpointReviews = 'reviews';

class ReviewSectionFormService {
  async create(params: ReviewFormDataType): AxiosPromise<{ message: string }> {
    const response = await api.post(endpointReview, {
      ...params,
    });
    return response;
  }

  async update(params: ReviewType): AxiosPromise<{ message: string }> {
    const response = await api.patch(endpointReview, {
      ...params,
    });
    return response;
  }

  async delete(id: string): AxiosPromise<{ message: string }> {
    const response = await api.delete(`${endpointReview}/${id}`);
    return response;
  }

  async getPost(id: string): AxiosPromise<ReviewType> {
    const response = await api.get(`${endpointReview}/${id}`);
    return response;
  }

  async getAll(): AxiosPromise<ReviewType[]> {
    const response = await api.get(endpointReviews);
    return response;
  }
}

export default ReviewSectionFormService;
