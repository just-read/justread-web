import Axios, { AxiosResponse } from 'axios';
import { ILogInPayload, ISignUpPayload, TAuthResponse, IRefreshTokenPayload } from './interfaces';

export const apiLogIn = async (payload: ILogInPayload): Promise<AxiosResponse<TAuthResponse>> => {
  const { data } = await Axios.post('/auth/login', payload);
  return data;
};

export const apiSignUp = async (payload: ISignUpPayload): Promise<AxiosResponse<TAuthResponse>> => {
  const { data } = await Axios.post('/auth/signup', payload);
  return data;
};

export const apiRefreshToken = async (payload: IRefreshTokenPayload): Promise<AxiosResponse<TAuthResponse>> => {
  const { data } = await Axios.post('/auth/refresh', payload);
  return data;
};
