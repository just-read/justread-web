import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export type TAuthAction = ActionType<typeof actions>;

export interface IAuthState {
  auth: {
    loading: boolean;
    message: string | null;
    isLoggedIn: boolean;
    accessToken: string | null;
    refreshToken: string | null;
  };
}

export interface ITokenPayload {
  accessToken: string;
  refreshToken: string;
}
