import { AxiosPromise } from 'axios';
import api from '@/src/api/axios';
import { IReview, IReviewFormData } from './components';

const endpointReview = 'review';
const endpointReviews = 'reviews';

class ReviewSectionFormService {
  async create(params: IReviewFormData): AxiosPromise<{ message: string }> {
    const response = await api.post(endpointReview, {
      ...params,
    });
    return response;
  }

  async update(params: IReview): AxiosPromise<{ message: string }> {
    const response = await api.patch(endpointReview, {
      ...params,
    });
    return response;
  }

  async delete(id: string): AxiosPromise<{ message: string }> {
    const response = await api.delete(`${endpointReview}/${id}`);
    return response;
  }

  async getPost(id: string): AxiosPromise<IReview> {
    const response = await api.get(`${endpointReview}/${id}`);
    return response;
  }

  async getAll(): AxiosPromise<IReview[]> {
    const response = await api.get(endpointReviews);
    return response;
  }
}

export default ReviewSectionFormService;
