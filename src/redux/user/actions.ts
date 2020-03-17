import { createAsyncAction } from 'typesafe-actions';
import { ISignUpParam, ITokenPayload } from './types';
import { IFail } from '../types';

export const SIGN_UP_REQUEST = 'user/SIGN_UP_REQUEST' as const;
export const SIGN_UP_SUCCESS = 'user/SIGN_UP_SUCCESS' as const;
export const SIGN_UP_FAILURE = 'user/SIGN_UP_FAILURE' as const;

export const signUp = createAsyncAction(SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE)<
  ISignUpParam,
  ITokenPayload,
  IFail
>();
