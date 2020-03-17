export interface ILogInPayload {
  email: string;
  password: string;
}

export interface ISignUpPayload {
  email: string;
  password: string;
  nickName: string;
}

export interface IRefreshTokenPayload {
  refreshToken: string;
}

interface Response<T> {
  success: boolean;
  message: string | null;
  result: T;
}

interface AuthResult {
  accessToken: string;
  refreshToken: string;
}

export type TAuthResponse = Response<AuthResult>;
