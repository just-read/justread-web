import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export type TUserAction = ActionType<typeof actions>;

export interface IUserState {
  auth: {
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

export interface ITokenPayload {
  accessToken: string;
  refreshToken: string;
}
