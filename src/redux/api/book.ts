import Axios, { AxiosResponse } from 'axios';
import { IGetBookListParam, TGetBookListResponse } from './interfaces';

export const apiGetBookList = async (params: IGetBookListParam): Promise<AxiosResponse<TGetBookListResponse>> => {
  const { data } = await Axios.get('/v1/books', { params });
  return data;
};
