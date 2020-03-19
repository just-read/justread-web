import produce from 'immer';
import { getType } from 'typesafe-actions';
import { IBookState, TBookAction } from './types';

const initialState: IBookState = {
  bookList: {
    loading: false,
    message: null,
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
