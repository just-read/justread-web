import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export type TUserAction = ActionType<typeof actions>;

export interface IUserState {
  logIn: {
    loading: boolean;
    message: string | null;
    isLoggedIn: boolean;
    accessToken: string | null;
    refreshToken: string | null;
  };
}

export interface ISignUpParam {
  email: string;
  password: string;
  nickName: string;
}

export interface ITokenState {
  accessToken: string;
  refreshToken: string;
}
