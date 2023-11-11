import { AxiosPromise } from 'axios';
import { BlogCardProps, BlockCardEditableProps } from './components';
import api from '@/src/api/axios';
import { PaginationPostsType } from '@/src/types/pagination';
import { SeoType } from '@/src/types/seo';

enum EndpointPostEnum {
  CREATE = 'post-create',
  UPDATE = 'post-update',
  DELETE = 'post-delete',
  GET_POSTS = 'posts',
  GET_POST_SEO = 'get-post-seo',
  UPDATE_POST_SEO = 'update-post-seo',
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

  async getPostSeo(id: string): AxiosPromise<SeoType> {
    const response = await api.get(`${EndpointPostEnum.GET_POST_SEO}/${id}`);
    return response;
  }

  async updatePostSeo(id: string, params: SeoType): AxiosPromise<SeoType> {
    const response = await api.post(EndpointPostEnum.UPDATE_POST_SEO, {
      id: id,
      ...params,
    });
    return response;
  }
}

export default PostService;
