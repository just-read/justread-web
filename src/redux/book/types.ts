import { ActionType } from 'typesafe-actions';
import * as actions from './actions';
import { Book } from 'interfaces/common';

export type TBookAction = ActionType<typeof actions>;

export interface IBookState {
  bookList: {
    recent: {
      loading: boolean;
      message: string | null;
      books: Book[];
    };
    popular: {
      loading: boolean;
      message: string | null;
      books: Book[];
    };
  };
  bookDetail: {
    loading: boolean;
    message: null;
    book: Book | null;
  };
}
