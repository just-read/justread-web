import { Book } from 'interfaces/common';

/* 요청 인터페이스 */

export interface ILogInParam {
  email: string;
  password: string;
}

export interface ISignUpParam {
  email: string;
  password: string;
  nickName: string;
}

export interface ILogInWithGoogleParam {
  email: string;
  nickName: string;
  googleId: string;
  tokenId: string;
}

export interface IRefreshTokenParam {
  refreshToken: string;
}

export interface IGetBookListParam {
  type: string;
  page: number;
  limit: number;
}

/* 응답 인터페이스 */
interface Response<T> {
  success: boolean;
  message: string | null;
  result: T;
}

interface AuthResult {
  accessToken: string;
  refreshToken: string;
}

interface PageInfo {
  total: number;
  current: number;
  limit: number;
  count: number;
}

interface BookListResult {
  pageInfo: PageInfo;
  books: Book[];
}

export type TAuthResponse = Response<AuthResult>;
export type TGetBookListResponse = Response<BookListResult>;
