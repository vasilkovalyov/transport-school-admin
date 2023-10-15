import { AxiosPromise } from 'axios';
import { BlogCardProps, BlockCardEditableProps } from './components';
import api from '@/src/api/axios';
import { PaginationPostsType } from '@/src/types/pagination.type';

enum EndpointPostEnum {
  CREATE = 'post-create',
  UPDATE = 'post-update',
  DELETE = 'post-delete',
  GET_POSTS = 'posts',
}

class PostService {
  async create(
    params: BlockCardEditableProps
  ): AxiosPromise<{ message: string }> {
    const response = await api.post(EndpointPostEnum.CREATE, {
      ...params,
    });
    return response;
  }

  async update(params: BlogCardProps): AxiosPromise<{ message: string }> {
    const response = await api.patch(EndpointPostEnum.UPDATE, {
      ...params,
    });
    return response;
  }

  async delete(id: string): AxiosPromise<{ message: string }> {
    const response = await api.delete(`${EndpointPostEnum.DELETE}/${id}`);
    return response;
  }

  async getPosts(
    size: number,
    page: number
  ): AxiosPromise<PaginationPostsType<BlogCardProps>> {
    const response = await api.get(EndpointPostEnum.GET_POSTS, {
      params: {
        size,
        page,
      },
    });
    return response;
  }

  async getPost(id: string): AxiosPromise<BlogCardProps> {
    const response = await api.get(`${EndpointPostEnum.GET_POSTS}/${id}`);
    return response;
  }
}

export default PostService;
