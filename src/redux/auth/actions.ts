import { createAsyncAction } from 'typesafe-actions';
import { IFailPayload } from '../types';
import { ISignUpParam, ILogInParam, IRefreshTokenParam, ITokenPayload } from './types';

export const SIGN_UP_REQUEST = 'auth/SIGN_UP_REQUEST' as const;
export const SIGN_UP_SUCCESS = 'auth/SIGN_UP_SUCCESS' as const;
export const SIGN_UP_FAILURE = 'auth/SIGN_UP_FAILURE' as const;

export const LOG_IN_REQUEST = 'auth/LOG_IN_REQUEST' as const;
export const LOG_IN_SUCCESS = 'auth/LOG_IN_SUCCESS' as const;
export const LOG_IN_FAILURE = 'auth/LOG_IN_FAILURE' as const;

export const REFRESH_TOKEN_REQUEST = 'auth/REFRESH_TOKEN_REQUEST' as const;
export const REFRESH_TOKEN_SUCCESS = 'auth/REFRESH_TOKEN_SUCCESS' as const;
export const REFRESH_TOKEN_FAILURE = 'auth/REFRESH_TOKEN_FAILURE' as const;

export const signUp = createAsyncAction(SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE)<
  ISignUpParam,
  ITokenPayload,
  IFailPayload
>();

export const logIn = createAsyncAction(LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE)<
  ILogInParam,
  ITokenPayload,
  IFailPayload
>();

export const refreshToken = createAsyncAction(REFRESH_TOKEN_REQUEST, REFRESH_TOKEN_SUCCESS, REFRESH_TOKEN_FAILURE)<
  IRefreshTokenParam,
  ITokenPayload,
  IFailPayload
>();
