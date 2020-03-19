import Axios, { AxiosResponse } from 'axios';
import { ILogInParam, ISignUpParam, ILogInWithGoogleParam, IRefreshTokenParam, TAuthResponse } from './interfaces';

export const apiLogIn = async (payload: ILogInParam): Promise<AxiosResponse<TAuthResponse>> => {
  const { data } = await Axios.post('/v1/auth/login', payload);
  return data;
};

export const apiSignUp = async (payload: ISignUpParam): Promise<AxiosResponse<TAuthResponse>> => {
  const { data } = await Axios.post('/v1/auth/signup', payload);
  return data;
};

export const apiLogInWithGoogle = async (payload: ILogInWithGoogleParam): Promise<AxiosResponse<TAuthResponse>> => {
  const { data } = await Axios.post('/v1/auth/google', payload);
  return data;
};

export const apiRefreshToken = async (payload: IRefreshTokenParam): Promise<AxiosResponse<TAuthResponse>> => {
  const { data } = await Axios.post('/v1/auth/refresh', payload);
  return data;
};
