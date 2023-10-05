import { useState } from 'react';
import { ILogin } from './Login.type';
import { AxiosError } from 'axios';
import { EndpointsEnum } from '@/src/api/endpoints';
import api from '@/src/api/axios';

export function useLogin() {
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function fetchLogin(params: ILogin) {
    try {
      setLoading(true);
      const response = await api.post(`${EndpointsEnum.LOGIN}`, {
        ...params,
      });
      setLoading(false);
      return response.data;
    } catch (e) {
      if (e instanceof AxiosError) {
        setErrorMessage('message');
      }
    } finally {
      setLoading(false);
    }
  }

  return [loading, errorMessage, fetchLogin];
}
