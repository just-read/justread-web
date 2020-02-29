import { createAsyncAction } from 'typesafe-actions';
import { ISignUpParam, ITokenState } from './types';
import { IFail } from 'redux/types';

export const SIGN_UP_REQUEST = 'user/SIGN_UP_REQUEST' as const;
export const SIGN_UP_SUCCESS = 'user/SIGN_UP_SUCCESS' as const;
export const SIGN_UP_FAILURE = 'user/SIGN_UP_FAILURE' as const;

export const signUp = createAsyncAction(
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE
)<ISignUpParam, ITokenState, IFail>();
