import { AxiosPromise } from 'axios';
import api from '@/src/api/axios';
import { TeamEducationBlockFullDataType } from './TeamEducationForm.type';
import { IBlockService } from '../types';

enum EndpointBlockTeamEducationEnum {
  CREATE = 'block/team-education-create',
  UPDATE = 'block/team-education-update',
  PUBLISH = 'block/team-education/publish',
  UNPUBLISH = 'block/team-education/unpublish',
  GET_BLOCK = 'blocks/team-education/',
}

class TeamEducationFormService
  implements IBlockService<TeamEducationBlockFullDataType>
{
  async publish(page: string): AxiosPromise<boolean> {
    const response = await api.patch(EndpointBlockTeamEducationEnum.PUBLISH, {
      page: page,
    });
    return response;
  }

  async unpublish(page: string): AxiosPromise<boolean> {
    const response = await api.patch(EndpointBlockTeamEducationEnum.UNPUBLISH, {
      page: page,
    });
    return response;
  }

  async create(
    params: TeamEducationBlockFullDataType
  ): AxiosPromise<{ message: string }> {
    const response = await api.post(EndpointBlockTeamEducationEnum.CREATE, {
      ...params,
    });
    return response;
  }

  async update(
    params: TeamEducationBlockFullDataType
  ): AxiosPromise<{ message: string }> {
    const response = await api.patch(EndpointBlockTeamEducationEnum.UPDATE, {
      ...params,
    });
    return response;
  }

  async getBlock(page: string): AxiosPromise<TeamEducationBlockFullDataType> {
    const response = await api.get(
      `${EndpointBlockTeamEducationEnum.GET_BLOCK}${page}`
    );
    return response;
  }
}

export default TeamEducationFormService;
