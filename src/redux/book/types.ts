import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export type TBookAction = ActionType<typeof actions>;

export interface IBookState {
  bookList: {
    loading: boolean;
    message: string | null;
  };
}
