import { AxiosPromise } from 'axios';
import { LoginType } from '../pages';
import api from '@/src/api/axios';
import { EndpointsEnum } from '../api/endpoints';

export type LoginResponseType = {
  _id: string;
  login: string;
  token: string;
};

export type RefreshTokenType = {
  token: string;
  refreshToken: string;
  tokenExpires: number;
};

class AuthService {
  async login(params: LoginType): AxiosPromise<LoginResponseType> {
    const response = await api.post(EndpointsEnum.LOGIN, {
      ...params,
    });
    return response;
  }

  async refreshToken(): AxiosPromise<RefreshTokenType> {
    const response = await api.post(EndpointsEnum.REFRESH);
    return response;
  }
}

export default AuthService;
