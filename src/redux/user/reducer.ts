import produce from 'immer';
import { getType } from 'typesafe-actions';
import { signUp } from './actions';
import { IUserState, TUserAction } from './types';

const initialState: IUserState = {
  auth: {
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
        draft.auth.loading = true;
        break;
      case getType(signUp.success):
        draft.auth = {
          loading: false,
          isLoggedIn: true,
          accessToken: action.payload.accessToken,
          refreshToken: action.payload.refreshToken,
          ...draft.auth
        };
        break;
      case getType(signUp.failure):
        draft.auth = {
          loading: false,
          message: action.payload.message,
          ...draft.auth
        };
        break;
      default:
        break;
    }
  });

export default userReducer;
