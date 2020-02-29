import produce from 'immer';
import { getType } from 'typesafe-actions';
import { signUp } from './actions';
import { IUserState, TUserAction } from './types';

const initialState: IUserState = {
  logIn: {
    loading: false,
    message: null,
    isLoggedIn: false,
    accessToken: null,
    refreshToken: null
  }
};

const userReducer = (state: IUserState = initialState, action: TUserAction) =>
  produce(state, draft => {
    switch (action.type) {
      case getType(signUp.request):
        draft.logIn.loading = true;
        break;
      case getType(signUp.success):
        draft.logIn = {
          loading: false,
          isLoggedIn: true,
          accessToken: action.payload.accessToken,
          refreshToken: action.payload.refreshToken,
          ...draft.logIn
        };
        break;
      case getType(signUp.failure):
        draft.logIn = {
          loading: false,
          message: action.payload.message,
          ...draft.logIn
        };
        break;
      default:
        break;
    }
  });

export default userReducer;
