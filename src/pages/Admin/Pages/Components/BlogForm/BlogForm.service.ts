import { AxiosPromise } from 'axios';
import api from '@/src/api/axios';
import { IBlogBlockFullData } from './BlogForm.type';
import { IBlockService } from '../types';

enum EndpointBlockBlogEnum {
  CREATE = 'block/blog-create',
  UPDATE = 'block/blog-update',
  PUBLISH = 'block/blog/publish',
  UNPUBLISH = 'block/blog/unpublish',
  GET_BLOCK = 'blocks/blog/',
}

class BlogFormService implements IBlockService<IBlogBlockFullData> {
  async publish(page: string): AxiosPromise<boolean> {
    const response = await api.patch(EndpointBlockBlogEnum.PUBLISH, {
      page: page,
    });
    return response;
  }

  async unpublish(page: string): AxiosPromise<boolean> {
    const response = await api.patch(EndpointBlockBlogEnum.UNPUBLISH, {
      page: page,
    });
    return response;
  }

  async create(params: IBlogBlockFullData): AxiosPromise<{ message: string }> {
    const response = await api.post(EndpointBlockBlogEnum.CREATE, {
      ...params,
    });
    return response;
  }

  async update(params: IBlogBlockFullData): AxiosPromise<{ message: string }> {
    const response = await api.patch(EndpointBlockBlogEnum.UPDATE, {
      ...params,
    });
    return response;
  }

  async getBlock(page: string): AxiosPromise<IBlogBlockFullData> {
    const response = await api.get(`${EndpointBlockBlogEnum.GET_BLOCK}${page}`);
    return response;
  }
}

export default BlogFormService;
