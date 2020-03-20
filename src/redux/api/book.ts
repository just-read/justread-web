import Axios from 'axios';
import {
  IGetBookListParam,
  TGetBookListResponse,
  IAddNewBookParam,
  TAddNewBookResponse,
  IGetBookDetails,
  TGetBookDetailsResponse,
  IModifyBook,
  TModifyBookResponse,
} from './interfaces';

export const apiGetBookList = async (params: IGetBookListParam): Promise<TGetBookListResponse> => {
  const { data } = await Axios.get<TGetBookListResponse>('/v1/books', { params });
  return data;
};

export const apiAddNewBook = async (params: IAddNewBookParam): Promise<TAddNewBookResponse> => {
  const { data } = await Axios.post<TAddNewBookResponse>('/v1/books', params);
  return data;
};

export const getBookDetails = async (params: IGetBookDetails): Promise<TGetBookDetailsResponse> => {
  const { bookId } = params;
  const { data } = await Axios.get<TGetBookDetailsResponse>(`/v1/books/${bookId}`);
  return data;
};

export const apiModifyBook = async (params: IModifyBook): Promise<TModifyBookResponse> => {
  const { bookId, ...otherParams } = params;
  const { data } = await Axios.put<TModifyBookResponse>(`/v1/books/${bookId}`, otherParams);
  return data;
};
