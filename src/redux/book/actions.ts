import { createAsyncAction } from 'typesafe-actions';

export const GET_BOOK_LIST_REQUEST = 'book/GET_BOOK_LIST_REQUEST' as const;
export const GET_BOOK_LIST_SUCCESS = 'book/GET_BOOK_LIST_SUCCESS' as const;
export const GET_BOOK_LIST_FAILURE = 'book/GET_BOOK_LIST_FAILURE' as const;

export const getBookList = createAsyncAction(GET_BOOK_LIST_REQUEST, GET_BOOK_LIST_SUCCESS, GET_BOOK_LIST_FAILURE)();
