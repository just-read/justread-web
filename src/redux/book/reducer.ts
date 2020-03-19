import produce from 'immer';
import { getType } from 'typesafe-actions';
import { IBookState, TBookAction } from './types';

const initialState: IBookState = {
  bookList: {
    recent: {
      loading: false,
      message: null,
      books: [],
    },
    popular: {
      loading: false,
      message: null,
      books: [],
    },
  },
  bookDetail: {
    loading: false,
    message: null,
    book: null,
  },
};

const bookReducer = (state: IBookState = initialState, action: TBookAction) =>
  produce(state, draft => {
    switch (action.type) {
      default:
        break;
    }
  });

export default bookReducer;
