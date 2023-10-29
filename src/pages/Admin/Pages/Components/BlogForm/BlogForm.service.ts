import { AxiosPromise } from 'axios';
import api from '@/src/api/axios';
import { BlogBlockFullDataType } from './BlogForm.type';
import { IBlockService } from '../types';

enum EndpointBlockBlogEnum {
  CREATE = 'block/blog-create',
  UPDATE = 'block/blog-update',
  PUBLISH = 'block/blog/publish',
  UNPUBLISH = 'block/blog/unpublish',
  GET_BLOCK = 'blocks/blog/',
}

class BlogFormService implements IBlockService<BlogBlockFullDataType> {
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

  async create(
    params: BlogBlockFullDataType
  ): AxiosPromise<{ message: string }> {
    const response = await api.post(EndpointBlockBlogEnum.CREATE, {
      ...params,
    });
    return response;
  }

  async update(
    params: BlogBlockFullDataType
  ): AxiosPromise<{ message: string }> {
    const response = await api.patch(EndpointBlockBlogEnum.UPDATE, {
      ...params,
    });
    return response;
  }

  async getBlock(page: string): AxiosPromise<BlogBlockFullDataType> {
    const response = await api.get(`${EndpointBlockBlogEnum.GET_BLOCK}${page}`);
    return response;
  }
}

export default BlogFormService;
