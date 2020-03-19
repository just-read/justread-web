import Axios, { AxiosResponse } from 'axios';
import { IGetBookshelfListParam, TGetBookshelfListResponse } from './interfaces';

export const apiGetBookshelfList = async (
  params: IGetBookshelfListParam
): Promise<AxiosResponse<TGetBookshelfListResponse>> => {
  const { data } = await Axios.get('/v1/bookshelves', { params });
  return data;
};
