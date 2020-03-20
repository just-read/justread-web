import { Book, Bookshelf } from 'interfaces/common';

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

export interface IAddNewBookParam {
  title: string;
  isbn: string;
  description: string;
  year: number;
  authors: string;
}

export interface IGetBookDetailsParam {
  bookId: number;
}

export interface IModifyBookParam {
  bookId: string;
  title: string;
  isbn: string;
  description: string;
  year: number;
  authors: string;
}

export interface IGetBookshelfListParam {
  page: number;
  limit: number;
}

export interface ICreateNewBookshelfParam {
  name: string;
}

export interface IDeletBookshelfParam {
  bookshelfId: number;
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

interface AddNewBookResult {
  newBook: Book;
}

interface GetBookDetailsResult {
  bookDetails: any;
}

interface ModifyBookResult {
  modifiedBook: Book;
}

interface BookshelfListResult {
  pageInfo: PageTransitionEventInit;
  bookshelves: Bookshelf[];
}

interface CreateNewBookshelfResult {
  newBookshelf: Bookshelf;
}

interface RemoveBookshelfResult {
  removedBookshelf: Bookshelf;
}

export type TAuthResponse = Response<AuthResult>;
export type TGetBookListResponse = Response<BookListResult>;
export type TAddNewBookResponse = Response<AddNewBookResult>;
export type TGetBookDetailsResponse = Response<GetBookDetailsResult>;
export type TModifyBookResponse = Response<ModifyBookResult>;
export type TGetBookshelfListResponse = Response<BookshelfListResult>;
export type TCreateNewBookshelfResponse = Response<CreateNewBookshelfResult>;
export type TRemoveBookshelfResponse = Response<RemoveBookshelfResult>;
