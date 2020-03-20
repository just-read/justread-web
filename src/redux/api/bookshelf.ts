import Axios from 'axios';
import {
  IGetBookshelfListParam,
  TGetBookshelfListResponse,
  ICreateNewBookshelfParam,
  TCreateNewBookshelfResponse,
  IModifyBookshelfParam,
  TModifyBookshelfResponse,
  IRemoveBookshelfParam,
  TRemoveBookshelfResponse,
} from './interfaces';

export const apiGetBookshelfList = async (params: IGetBookshelfListParam): Promise<TGetBookshelfListResponse> => {
  const { data } = await Axios.get<TGetBookshelfListResponse>('/v1/bookshelves', { params });
  return data;
};

export const apiAddNewBookshelf = async (params: ICreateNewBookshelfParam): Promise<TCreateNewBookshelfResponse> => {
  const { data } = await Axios.post<TCreateNewBookshelfResponse>('/v1/bookshelves', params);
  return data;
};

export const apiModifyBookshelf = async (params: IModifyBookshelfParam): Promise<TModifyBookshelfResponse> => {
  const { bookshelfId, ...otherParams } = params;
  const { data } = await Axios.put<TModifyBookshelfResponse>(`/v1/bookshelves/${bookshelfId}`, otherParams);
  return data;
};

export const apiDeleteBookshelf = async (params: IRemoveBookshelfParam): Promise<TRemoveBookshelfResponse> => {
  const { bookshelfId } = params;
  const { data } = await Axios.delete<TRemoveBookshelfResponse>(`/v1/bookshelve/${bookshelfId}`);
  return data;
};
