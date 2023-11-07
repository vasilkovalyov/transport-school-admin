import { AxiosPromise } from 'axios';
import { LoginType, RegisterAdminType } from '../pages';
import api from '@/src/api/axios';

export enum EndpointsEnum {
  LOGIN = 'login',
  REFRESH = 'refresh-token',
  HAS_ADMIN = 'has-admin',
  ADMIN_REGISTRATION = 'registration',
}

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

  async adminRegistration(
    params: Omit<RegisterAdminType, 'confirm_password'>
  ): AxiosPromise<{ message: string }> {
    const response = await api.post(EndpointsEnum.ADMIN_REGISTRATION, {
      ...params,
    });
    return response;
  }

  async hasAdmin(): AxiosPromise<{ hasAdmin: boolean }> {
    const response = await api.get(EndpointsEnum.HAS_ADMIN);
    return response;
  }

  async refreshToken(): AxiosPromise<RefreshTokenType> {
    const response = await api.post(EndpointsEnum.REFRESH);
    return response;
  }
}

export default AuthService;
